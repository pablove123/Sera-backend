import mongoose, { SchemaTypeOptions } from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String, 
  moods: [{type: Schema.Types.ObjectId, ref:"Moods"}]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
