import { Request } from "express";
import { Logger } from "winston";  // Winston logger type

declare module "express-serve-static-core" {
  interface Request {
    logger?: Logger;
  }
}
