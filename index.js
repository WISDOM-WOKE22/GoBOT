const express  = require('express');
const { Configuration, OpenAIApi } = require('openai') 
const dotenv = require('dotenv')
const cors = require('cors')
const Completion = require('./Routes/Routes')
dotenv.config({ path: './config.env' })

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

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// app.post('/api/v1/test', async (request, response) => {
//     try{
//         const Response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: "Say this is a test",
//             max_tokens: 7,
//             temperature: 0,
//           });
//           console.log(Response.data)

//         response.status(200) 
//         .json({
//             message:"API is working"
//         }) 

//     } catch(error) {
//         // console.log(error)
//         response.status(400)
//         .json({
//             message: "error"
//         })
//     }
// })


app.use('*', (request, response) => {
    response.status(404)
    .json({
        status:'fail',
        message: "This route is not defined"
    })
})

const port = 8000


app.listen( port , () => {
    // console.log(process.env.OPENAI_API_KEY)
    console.log(`Application running at ${port} 😁😁😁...` )
})

