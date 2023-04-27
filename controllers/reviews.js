import { Review } from "../models/review.js";

function index(req, res) {
  console.log("works")
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