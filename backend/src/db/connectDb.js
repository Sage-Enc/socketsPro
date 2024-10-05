import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(err){
        console.error("Error Occured While Connecting The Databse");
        process.exit(1);
    }
}

export default connectDb;