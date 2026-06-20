import type { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger.js'

export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    logger.warn(`Operational error: ${err.message}`)
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
    return
  }

  logger.error('Unexpected error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  })
}

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
}
