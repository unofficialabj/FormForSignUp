import Signup from "../model/user"

export const admin= async(req,res)=>{
   const user = await Signup.find({
       // khali xodda sabai aauxa 
       // email: email yo lekhda email maatra aauxa
   }).select('-password').select('-name').exec()

   res.json(user)
}

export const singleUser= async(req,res)=>{
    const {id} = req.body
    const findSingleUser= await Signup.findById(
        id
    )//.select('-password')
    res.json(findSingleUser)
}

