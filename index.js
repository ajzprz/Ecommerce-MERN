const express = require('express')
const app = express();
// const {returnProducts, returnSingleProduct} = require('./controllers/products')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const productsRoutes = require('./routes/products')
// const {products, users} = require('./data.js')
const connectDatabase = require('./database/connection');
const Product = require('./models/Product')

const hbs = require('hbs');

const staticPath = __dirname + "/public"

connectDatabase()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/login', loginRoutes)
app.use('/api/products',productsRoutes)

app.use('/register',registerRoutes)

//Serving static files
app.use('/public', express.static(staticPath))
//Setting view engine for our application
app.set('view engine', 'hbs')
//Setting the views folder , default is views
app.set('views', './templates')
//Letting the engine know where to look for partials files
hbs.registerPartials('./templates/partials')

const logger = (req,res,next)=>{
    // console.log(req.url)
    console.log("logged")
    next();
}

app.get('/',[logger],async (req, res) => {
    const products = await Product.find()
    res.render('index', {products})
})

app.get("*", (req, res) => {
    res.sendStatus(404)

})


app.listen(8000, () => {
    console.log("Server is running at port 8000")
})
