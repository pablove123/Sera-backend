import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  feeling: {type:String, enum:["Happy", "Sad", "Angry", "Nuetral", "Bored", "Relaxed"]}, 
  game: String, 
  content: String, 
  rating: Number
})


const Review = mongoose.model('Review', reviewSchema)

export { Review }