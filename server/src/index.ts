import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from './config/index.js'
import logger from './utils/logger.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import foodRoutes from './routes/food.js'
import authRoutes from './routes/auth.js'

const app = express()
const httpServer = createServer(app)

// Socket.io
export const io = new Server(httpServer, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST'],
  },
})

// Swagger configuration
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zesty Food API',
      version: '0.1.0',
      description: 'REST API for the Zesty food web application',
      contact: {
        name: 'Zesty Team',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Food: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Food item ID' },
            name: { type: 'string', description: 'Food item name' },
            description: { type: 'string', description: 'Food item description' },
            price: { type: 'number', description: 'Food item price' },
            category: { type: 'string', description: 'Food item category' },
            image: { type: 'string', description: 'Food item image URL' },
            rating: { type: 'number', description: 'Average rating' },
            reviews: { type: 'number', description: 'Number of reviews' },
            isAvailable: { type: 'boolean', description: 'Availability status' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
            data: { description: 'Response data' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

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

// Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Zesty API Documentation',
}))

// OpenAPI spec as JSON
app.get('/api/docs.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

// Health check
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/foods', foodRoutes)

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

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(config.mongoUri)
    logger.info('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:')
    console.error(error)
    logger.warn('MongoDB not available — running without database')
  }

  httpServer.listen(config.port, () => {
    logger.info(`Server running on port ${config.port} in ${config.nodeEnv} mode`)
    logger.info(`API Documentation: http://localhost:${config.port}/api/docs`)
  })
}

startServer()

export default app
