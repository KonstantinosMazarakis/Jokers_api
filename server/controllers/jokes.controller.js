const Jokes = require("../models/jokes.model")


module.exports.findAllJokes = (req,res)=>{
    Jokes.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>res.json({message:"something went wrong", error:err}))

}

module.exports.createJoke = (req,res)=>{
    Jokes.create(req.body)
        .then(newNinja=>{
            res.json({results: newNinja})
        })
        .catch(err=>res.json({message:"something went wrong", error:err}))

}

module.exports.findOneJoke = (req,res)=>{
    Jokes.findOne({_id: req.params.id})
        .then(oneJoke =>{
            res.json({results: oneJoke})
        })
        .catch(err=>res.json({message:"something went wrong", error:err}))
}

module.exports.updateOneJoke = (req,res)=>{
    Jokes.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then(updatedJoke=>{
                res.json({results: updatedJoke})
            })
            .catch(err=>res.json({message:"something went wrong", error:err}))
}

module.exports.deleteJoke = (req,res)=>{
    Jokes.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>res.json({message:"something went wrong", error:err}))
}