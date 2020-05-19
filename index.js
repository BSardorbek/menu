require('./config/db')
const chalk = require('chalk')
const morgan = require('morgan')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

//admin rout
const adminRoute = require('./routes/admin/index')


const app = express()

app.use(morgan('tiny'))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars:allowInsecurePrototypeAccess(Handlebars)
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/admin',adminRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(chalk.bgBlue(`Started on PORT : ${PORT}`)))