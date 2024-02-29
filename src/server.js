import express from 'express';
import cors from 'cors';
const app = express()
const port = 3000




app.use(express.json())
app.use(cors())


app.get("/mensagem", (req,res) =>{
    res.send('olá esse é o meu primeiro deploy')
})

app.listen(port, ()=>{
    
})