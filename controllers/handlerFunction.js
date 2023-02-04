// exports.AI = async (request, response) => {
//     try{
//         const Response = await openAi.createCompletion({
//             model: "text-davinci-003",
//             prompt: request.body.chat,
//             max_tokens: 100,
//             temperature: 0,
//           })
//           const mainResponse = Response.data.choices[0].text
  
//             response.status(200)
//             .json({
//               status: 'success',
//               message: {
//                   mainResponse
//               }
//             })
//     } catch (error) {
//         response.status(400)
//         .json({
//             status: 'fail',
//             message: error
//         })
//     }
// } 