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

export const deleteUser= async(req,res)=>{
    console.log(req.query)
    const {user}=req.query
    const deletedUser = await Signup.findByIdAndDelete(user).exec()
    res.status(200).send("User deleted successfully")
}