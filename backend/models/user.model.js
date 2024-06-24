import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
<<<<<<< HEAD
=======
    role: {
        type: String,
        required: true,
        enum: ["student", "teacher"]
    },
>>>>>>> main
    profileImage:{
        type:String,
        default:""
    },
    coverImage:{
        type:String,
        default:""
    },

},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;