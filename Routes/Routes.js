const express = require('express')
const Completion = require('../controllers/controller')

const Router = express.Router()

Router
 .route('/questions')
 .post( Completion.Completion )

Router
 .route('/stevejobs')
 .post( Completion.SteveJobs )

Router
 .route('/grammarCorrector')
 .post( Completion.grammarCorrector )

Router
 .route('/maths')
 .post( Completion.mathsInstructor )

Router
 .route('/languageTranslator')
 .post( Completion.languageTranslator )

Router
 .route('/jarvis')
 .post( Completion.jarvis )

 module.exports = Router

