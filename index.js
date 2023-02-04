const express  = require('express');
const { Configuration, OpenAIApi } = require('openai') 
const cors = require('cors')
const Completion = require('./Routes/Routes')

const app = express();

app.use(express.json())

// const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);

app.post('/api/v1/start', async (request, response) => {
    try{
        const Response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "is this ChatGPT    ",
                    max_tokens: 7,
                    temperature: 0,
                  })
     const mainResponse = Response.data.choices[0].text;
        response.status(200)
        .json({
            mainResponse
        })
    } catch (error){
        console.log(error)
        response.status(400)
        .json({
            message: "API not working"
        })
    }
})
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

module.exports = app;