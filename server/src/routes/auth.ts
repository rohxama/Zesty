import { Router, type Request, type Response } from 'express'
import { User } from '../models/User.js'
import logger from '../utils/logger.js'

const router = Router()

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already exists
 */
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.status(400).json({ success: false, message: 'All fields are required' })
      return
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      res.status(400).json({ success: false, message: 'An account with this email already exists' })
      return
    }

    const user = new User({ name, email: email.toLowerCase(), password })
    await user.save()

    logger.info(`New user registered: ${email}`)

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    logger.error('Signup error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Sign in with email and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sign in successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/signin', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ success: false, message: 'Email and password are required' })
      return
    }

    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'You have no account with this email. Please sign up first.',
      })
      return
    }

    if (user.password !== password) {
      res.status(401).json({ success: false, message: 'Incorrect password' })
      return
    }

    logger.info(`User signed in: ${email}`)

    res.status(200).json({
      success: true,
      message: 'Sign in successful',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    logger.error('Signin error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all registered users (admin only)
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await User.find({}, { password: 0 }).sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      data: users,
    })
  } catch (error) {
    logger.error('Get users error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
