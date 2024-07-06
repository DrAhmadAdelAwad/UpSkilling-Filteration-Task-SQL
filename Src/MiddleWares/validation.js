export const validation = (joiSchema)=>{
    return (req,res,next) =>{
        const data = {...req.body , ...req.params , ...req.query}
    const validationResult = joiSchema.validate(data , {abortEarly : false})
    if(validationResult.error){
        return res.status(400).json({ValidationError: validationResult.error.details})
    }
    return next()
    }
}
