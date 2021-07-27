import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Home = new Schema(
  {
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    levels: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Home
