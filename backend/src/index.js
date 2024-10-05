import {app} from './app.js'
import { createServer } from "http";
import { Server } from "socket.io"
import connectDb from './db/connectDb.js'
import dotenv from "dotenv"

const server = createServer(app);
const io = Server(server, {})

dotenv.config({
    path: './env'
})

connectDb().
then(()=>{
    server.listen(process.env.PORT, ()=>{
        console.log(`Server is Listening on PORT ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.error("MongoDB Connection Failed:", err)
})