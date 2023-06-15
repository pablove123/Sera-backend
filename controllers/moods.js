import { Moods } from "../models/moods.js";

const index = async (req, res) => {
  try {
    const moods = await Moods.find({})
    res.status(200).json(moods)
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
}

const create = async (req,res) => {
  try{
    // req.body.author = req.user.profile
    const mood = await Moods.create(req.body)
    // const profile = await Profile.findById(req.user.profile)
    // experience.author = profile
    res.status(200).json(mood)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const show = async (req,res) => {
  try{
    const mood = await Moods.findById(req.params.id)
    // .populate("author")
    res.status(200).json(mood)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteMood = async (req, res) => {
  try {
    const mood = await Moods.findByIdAndDelete(req.params.id)
    res.status(200).json(mood)
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
}

const createComment = async (req, res) => {
  try {
    const mood = await Moods.findById(req.params.id)
    mood.comment.push(req.body)
    await mood.save()
    res.status(200).json(mood)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(review)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export{
  index, 
  create, 
  createComment, 
  deleteMood, 
  update, 
  show
}