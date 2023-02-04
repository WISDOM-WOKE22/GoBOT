const express  = require('express');
const { Configuration, OpenAIApi } = require('openai') 
const cors = require('cors')
const Completion = require('./Routes/Routes')

const app = express();

app.use(express.json())

// const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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"
    // apiKey: "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"
    // apiKey: "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"
});
const openai = new OpenAIApi(configuration);



// // const  = require("openai");
// const configuration = new Configuration({
    // //   apiKey: "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",
    //   apiKey: "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",
    // });
    // const openAi = new OpenAIApi(configuration);
    
    
// app.post('/api/v1', async (request, response) => {
//     const Response = await openAi.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test",
//         max_tokens: 7,
//         temperature: 0,
//       })
//     response.status(200)
//     .json({
    //         status:'success',
    //         message: {
//             Response
//         }
//     })
// })

app.post('/api/v1/start', async (request, response) => {
    try{
        const Response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "is this ChatGPT    ",
                    max_tokens: 7,
                    temperature: 0,
                  })
        // const Response = await openai.listModels()
        // const Response = await openai.retrieveModel("text-davinci-003");
        // const Response = await openai.listModels();
    // const Response = await openai.createCompletion({
    //     "model": "text-davinci-003",
    //     "prompt": "Say this is a test",
    //     "max_tokens": 7,
    //     "temperature": 0,
    //     "top_p": 1,
    //     "n": 1,
    //     "stream": false,
    //     "logprobs": null,
    //     "stop": ["\n"] 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
    //   })
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

app.use('/api/v1', Completion)

app.use('*', (request, response) => {
    response.status(404)
    .json({
        status:'fail',
        message: "This route is not defined"
    })
})

module.exports = app;