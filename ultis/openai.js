const openai = require('openai')
const { Configuration, OpenAIApi } = openai
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});
console.log(process.env.OPENAI_API_KEY)
const openAi = new OpenAIApi(configuration);

module.exports = openAi;

