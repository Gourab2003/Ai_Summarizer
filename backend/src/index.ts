import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import axios from "axios";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(
    ({timestamp, level, message}) => `${timestamp} ${level}: ${message}`
  )
);

const transport  = new DailyRotateFile({
  filename: 'logs/ai-summarizer-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  format: logFormat,
  transports: [
    transport,
    new winston.transports.Console()
  ]
});

const logRequest = async (req: Request, res: Response, next: NextFunction)=>{
  const clientIp = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'Unknown';
  let location = 'Localhost';
  let apiKey = req.headers.authorization || 'Not Provided';

  if(clientIp !== '::1' && !clientIp?.startsWith('127.0.0')){
    try {
      const ipApiUrl = `http://ip-api.com/json/${clientIp}`;
      const response = await axios.get(ipApiUrl);
      const {city, region, country} = response.data;
      location = `${city}, ${region}, ${country}`;
    } catch (error:any) {
      logger.error(`Failed to fetch location for Ip ${clientIp}:${error.message}`);
      location = 'Unknown Location'
    }
  } else{
    location: 'Localhost';
  }

  const logMessage = `
    Request received: 
      - Method: ${req.method}
      - Url: ${req.originalUrl}
      - IP: ${clientIp}
      - Location: ${location}
      - API key: ${apiKey}
      - Body: ${JSON.stringify(req.body)}
  `;

  logger.info(logMessage);
  req.logger = logger;

  next();
};

app.use(logRequest)


app.get("/", (req: Request, res: Response) => {
  res.send("AI Summarizer Backend is Running! 🚀");
});


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

app.post("/summarize", async (req: Request, res: Response): Promise<void> => {
    try {
        
      req.logger?.info("Summarization request started ")
      const { text } = req.body;
  
      if (!text) {
        req.logger?.warn("Summarization request failed: No text provided.");
        res.status(400).json({ error: "Text is required for summarization." });
        return;
      }
  
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Summarize the following text below 50 words :\n\n${text}\n\nSummary:`;
  
      const result = await model.generateContent(prompt);
      
      // ✅ Extract summary correctly
      const summary = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";
      req.logger?.info(`Summary generated: ${summary}`);
      res.json({ summary });
  
    } catch (error: any) {
      logger.error(`Error summarizing text: ${error.message}`, error); // Log error with stack trace
      console.error("Error summarizing text:", error);
      res.status(500).json({ error: error.message || "Failed to summarize text." });
    }
  });

app.listen(port,  () => {
  console.log(`✅ Server is running on port ${port}`);
});
