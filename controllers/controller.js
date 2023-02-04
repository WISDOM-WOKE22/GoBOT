const openAi = require('../ultis/openai')
const factory = require('./handlerFunction')

exports.Completion = async ( request, response ) => {
    try{
        const Response = await openAi.createCompletion({
          model: "text-davinci-003",
          prompt: request.body.chat,
          max_tokens: 100,
          temperature: 0,
        })
        const GoBOT = Response.data.choices[0].text

          response.status(200)
          .json({
            status: 'success',
            message: {
                GoBOT
            }
          })
    } catch (error) {
        response.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
}


exports.SteveJobs = async ( request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be steve jobs. Anwser with motivational contents.
      steve: how can i help you.
      person: i want some motivation. 
      steve: you are great and can start your own business.
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
            GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
};

exports.grammarCorrector = async (request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be a tool that correct grammatic errors.
      tool: i can correct any grammatic error.
      person: how e dey be. 
      tool: how are you.
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0.3,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
          GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
};


exports.mathsInstructor = async (request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be a maths instructor. solve all questions
      instructor: i can solve all mathematic problems.
      person: 20 * 20. 
      instructor: 400.
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0.5,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
          GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
}

exports.languageTranslator = async (request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be a language translator, translate to other languages.
      translator: i can translate a language to another language.
      person: what is good morning in french. 
      translator:it is bonjour in french.
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0.5,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
          GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
}

exports.jarvis = async (request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be iron man jarvis, Answer questions like jarvis.
      jarvis: how can i help you.
      person: what is water made of. 
      jarvis: water is made up of two elements namely hydrogen and oxygen.
      person: who was the first president of USA.
      jarvis: the first president of USA was George Washington. He was appointed president on the 30th of April 1789
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0.7,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
          GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
};


exports.javaScriptInstructor = async (request, response ) => {
  try{
    const Response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend to be a javaScript instructor, and all javaScript questions.
      jarvis: how can i help you.
      person: what is water made of. 
      jarvis: water is made up of two elements namely hydrogen and oxygen.
      person: who was the first president of USA.
      jarvis: the first president of USA was George Washington. He was appointed president on the 30th of April 1789
      person: ${ request.body.chat}
      `,
      max_tokens: 100,
      temperature: 0.7,
    })
    const GoBOT = Response.data.choices[0].text

      response.status(200)
      .json({
        status: 'success',
        message: {
          GoBOT
        }
      })
  } catch (error) {
    response.status(400)
    .json({
        status: 'fail',
        message: error
    })
  }
}