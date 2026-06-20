import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { config } from './config/index.js'
import logger from './utils/logger.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import foodRoutes from './routes/food.js'

const app = express()
const httpServer = createServer(app)

export const io = new Server(httpServer, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST'],
  },
})

// Security middleware
app.use(helmet())
app.use(cors({ origin: config.corsOrigin, credentials: true }))

// Rate limiting
app.use(
  rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.max,
    message: 'Too many requests, please try again later.',
  }),
)

// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Logging
app.use(
  morgan('combined', {
    stream: { write: (message: string) => logger.info(message.trim()) },
  }),
)

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/foods', foodRoutes)

// API documentation
app.get('/api/docs', (_req, res) => {
  res.json({ message: 'API documentation endpoint - integrate swagger-ui-express here' })
})

// Socket.io connection
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`)

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`)
  })
})

// Error handling
app.use(notFound)
app.use(errorHandler)

// Start server
httpServer.listen(config.port, () => {
  logger.info(`Server running on port ${config.port} in ${config.nodeEnv} mode`)
})

export default app
