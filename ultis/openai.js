const openai = require('openai')
const { Configuration, OpenAIApi } = openai

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});
const openAi = new OpenAIApi(configuration);

module.exports = openAi;

