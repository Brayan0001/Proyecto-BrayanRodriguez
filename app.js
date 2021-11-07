// Nos permite configurar las variables de entorno y que no den
// problema al utilizar importaciones de modulos al estilo ES6
import './loadEnv.js'
import express from 'express'
import router from './routes/routes.js'
import cookieParser from 'cookie-parser'
import sessions from 'express-session'
import {logger} from './controllers/authController.js'

// Puerto donde escucha express
const PORT = 11000

// Aplicacion (server) de express
const app = express()

// Definir el sistema de vistas (plantillas) a utilizar
app.set('view engine', 'pug')

// Definir la ubicacion de los archivos publicos
app.use(express.static('public'))

// Configurar el manejo de sesiones en la app de express
const oneDay = 24 * 60 * 60 * 1000
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: oneDay }
}))


// Configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// configurando express para que trabaje con cookies
app.use(cookieParser())

app.use(logger)

// Routers
app.use('/', router)

// Servidor de express escuchando en el puerto
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})



