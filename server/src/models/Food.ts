import mongoose, { Schema, type Document } from 'mongoose'

export interface IFood extends Document {
  name: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  reviews: number
  isAvailable: boolean
}

const foodSchema = new Schema<IFood>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, index: true },
    image: { type: String, default: '' },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export const Food = mongoose.model<IFood>('Food', foodSchema)
