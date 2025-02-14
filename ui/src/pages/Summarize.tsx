import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Spinner, Card, Alert } from "react-bootstrap";
import { MdContentCopy, MdCheckCircle, MdError, MdClear } from "react-icons/md";

const SummarizePage: React.FC = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const summaryRef = useRef<HTMLParagraphElement>(null);

  const handleSummarize = async () => {
    if (!text.trim()) {
      setErrorMessage("Please enter text to summarize.");
      return;
    }
    setLoading(true);
    setSummary("");
    setErrorMessage("");

    try {
      const response = await fetch("https://5c29-45-112-241-246.ngrok-free.app/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Failed to fetch summary");
      const data = await response.json();
      setSummary(data.summary || "No summary generated.");
    } catch (error) {
      setErrorMessage("Error summarizing text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopySummary = () => {
    if (summaryRef.current) {
      navigator.clipboard.writeText(summaryRef.current.innerText)
        .then(() => setCopySuccess(true))
        .catch(() => setErrorMessage("Failed to copy summary."));
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleClearText = () => {
    setText("");
    setSummary("");
    setErrorMessage("");
  };

  useEffect(() => {
    if (errorMessage) setTimeout(() => setErrorMessage(""), 5000);
  }, [errorMessage]);

  return (
      
    <Container className="mt-4 p-4 border rounded shadow-sm bg-light">
      <br/>
      <h3 className="text-center mb-3">AI Text Summarizer</h3>

      <Form.Group>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <div className="text-center my-3">
        <Button onClick={handleSummarize} disabled={loading || !text.trim()} className="me-2">
          {loading ? <Spinner animation="border" size="sm" /> : "Summarize"}
        </Button>
        <Button variant="secondary" onClick={handleClearText} disabled={loading}>
          <MdClear /> Clear
        </Button>
      </div>

      {summary && (
        <Card className="p-3 mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Summary</h5>
            <Button variant="light" onClick={handleCopySummary}>
              {copySuccess ? <MdCheckCircle color="green" /> : <MdContentCopy />}
            </Button>
          </div>
          <p ref={summaryRef}>{summary}</p>
        </Card>
      )}

      {errorMessage && (
        <Alert variant="danger" className="mt-3 d-flex align-items-center">
          <MdError className="me-2" /> {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default SummarizePage;
