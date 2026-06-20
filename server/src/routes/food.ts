import { Router } from 'express'
import { Food } from '../models/Food.js'
import logger from '../utils/logger.js'

const router = Router()

/**
 * @swagger
 * /api/foods:
 *   get:
 *     summary: Get all available food items
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: List of food items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Food'
 */
router.get('/', async (_req, res) => {
  try {
    const foods = await Food.find({ isAvailable: true })
    res.json({ success: true, data: foods })
  } catch (error) {
    logger.error('Error fetching foods:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch foods' })
  }
})

/**
 * @swagger
 * /api/foods/{id}:
 *   get:
 *     summary: Get a food item by ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Food item ID
 *     responses:
 *       200:
 *         description: Food item found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Food'
 *       404:
 *         description: Food not found
 */
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id)
    if (!food) {
      res.status(404).json({ success: false, message: 'Food not found' })
      return
    }
    res.json({ success: true, data: food })
  } catch (error) {
    logger.error('Error fetching food:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch food' })
  }
})

/**
 * @swagger
 * /api/foods:
 *   post:
 *     summary: Create a new food item
 *     tags: [Food]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, description, price, category]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Food item created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Food'
 */
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body)
    res.status(201).json({ success: true, data: food })
  } catch (error) {
    logger.error('Error creating food:', error)
    res.status(500).json({ success: false, message: 'Failed to create food' })
  }
})

/**
 * @swagger
 * /api/foods/{id}:
 *   put:
 *     summary: Update a food item
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Food item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               isAvailable:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Food item updated
 *       404:
 *         description: Food not found
 */
router.put('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!food) {
      res.status(404).json({ success: false, message: 'Food not found' })
      return
    }
    res.json({ success: true, data: food })
  } catch (error) {
    logger.error('Error updating food:', error)
    res.status(500).json({ success: false, message: 'Failed to update food' })
  }
})

/**
 * @swagger
 * /api/foods/{id}:
 *   delete:
 *     summary: Delete a food item
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Food item ID
 *     responses:
 *       200:
 *         description: Food item deleted
 *       404:
 *         description: Food not found
 */
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id)
    if (!food) {
      res.status(404).json({ success: false, message: 'Food not found' })
      return
    }
    res.json({ success: true, message: 'Food deleted successfully' })
  } catch (error) {
    logger.error('Error deleting food:', error)
    res.status(500).json({ success: false, message: 'Failed to delete food' })
  }
})

export default router
