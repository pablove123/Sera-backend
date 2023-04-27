import { Moods } from "../models/moods.js";

function index(req, res) {
  console.log("works")
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

const createComment = async (req, res) => {
  try {
    const mood = await Moods.findById(req.params.id)
    mood.comment.push(req.body)
    await mood.save()
    res.status(200).json(mood)
  } catch (error) {
    
  }
}

export{
  index, 
  create, 
  createComment
}