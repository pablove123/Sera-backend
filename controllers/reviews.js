import { Review } from "../models/review.js";

const index = async (req, res) => {
  try {
    const reviews = await Reviews.find({})
    res.status(200).json(reviews)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const create = async (req,res) => {
  try{
    const review = await Review.create(req.body)
    res.status(200).json(review)
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id)
    res.status(200).json(review)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
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
  deleteReview, 
  update
}