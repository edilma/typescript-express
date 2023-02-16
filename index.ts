import express,{Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req:Request,res:Response)=>{
    
    res.send("Hello Type Script")
})

app.listen(3000,()=>{
console.log ("Hurray ❤️ This is good ")
})