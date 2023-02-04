const openai = require('openai')
const { Configuration, OpenAIApi } = openai

const configuration = new Configuration({
    apiKey: "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"
});
const openAi = new OpenAIApi(configuration);

module.exports = openAi;

