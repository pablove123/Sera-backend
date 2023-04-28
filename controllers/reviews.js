import { Review } from "../models/review.js";

const index = async (req, res) => {
  try {
    const reviews = await Reviews.find({})
    res.status(200).json(reviews)
  } catch (error) {
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


export{
  index, 
  create, 
}