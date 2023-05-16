import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: 'Profile' }], 
  content: String, 
}, {
  timestamps:true,
})

const moodSchema = new Schema({
  feeling: {type:String, enum:["Happy", "Sad", "Angry", "Nuetral", "Bored", "Relaxed"]}, 
  notes: String, 
  // comment: [commentSchema]
}, {
timestamps: true,
})


const Moods = mongoose.model('Moods', moodSchema)

export { Moods }