require('dotenv').config()
const db=require('./db');
const PORT=process.env.PORT||3000
const express=require('express')
const cors= require('cors')
const corsOptions=require('./config/corsOptions')

const app=express()
app.use(cors(
   corsOptions
  ));
  app.options('*', cors(corsOptions)); 

app.use(express.json())
// This will handle preflight requests

app.use('/api/auth',require('./routes/auth')
)
app.use('/api/notes',require('./routes/notes'))

app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
})