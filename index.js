const express  = require('express');
const { Configuration, OpenAIApi } = require('openai') 
const dotenv = require('dotenv')
const cors = require('cors')
const Completion = require('./Routes/Routes')

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.status(200)
    .json({
        message: "Welcom to GoBOT API"
    })
})

app.use('/api/v1', Completion)

app.use('*', (request, response) => {
    response.status(404)
    .json({
        status:'fail',
        message: "This route is not defined"
    })
})

const port = 8000

dotenv.config({ path: './config.env' })

app.listen( port , () => {
    // console.log(process.env.OPENAI_API_KEY)
    console.log(`Application running at ${port} 😁😁😁...` )
})

