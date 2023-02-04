const app = require('./index');
const dotenv = require('dotenv')
const port = 8000

dotenv.config({ path: './config.env' })

app.listen( port , () => {
    console.log(`Application running at ${port} 😁😁😁...` )
})