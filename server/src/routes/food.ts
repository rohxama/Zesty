import { Router } from 'express'
import { Food } from '../models/Food.js'
import logger from '../utils/logger.js'

const router = Router()

// Get all food items
router.get('/', async (_req, res) => {
  try {
    const foods = await Food.find({ isAvailable: true })
    res.json({ success: true, data: foods })
  } catch (error) {
    logger.error('Error fetching foods:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch foods' })
  }
})

// Get food by ID
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

// Create food item
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body)
    res.status(201).json({ success: true, data: food })
  } catch (error) {
    logger.error('Error creating food:', error)
    res.status(500).json({ success: false, message: 'Failed to create food' })
  }
})

// Update food item
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

// Delete food item
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
