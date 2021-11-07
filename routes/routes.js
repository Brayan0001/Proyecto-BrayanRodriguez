import express from 'express'
import { register, login, logout, isAuthenticated } from '../controllers/authController.js'
import { departamentoADD, departamentoDEL, departamentoLIS, departamentoUPD } from '../controllers/departamentoController.js'
import { empleadoADD, empleadoDEL, empleadoLIS, empleadoUPD } from '../controllers/empleadoController.js'
const router = express.Router()

// rutas para las vistas
// router.get('/', isAuthenticated, (req, res) => { 
//     res.render('index', {user: req.session.user})
// })

router.get('/', (req, res) => { 
    res.render('menu')
})

router.get('/empleado', empleadoLIS)

router.get('/departamento', departamentoLIS)

router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/logout', logout);

router.get('/register', (req, res) => {
    res.render('register')
})


// rutas para los controllers
router.post('/register', register)
router.post('/login', login)

router.post('/ingresarDEP',departamentoADD)
router.post('/modificarDEP',departamentoUPD)
router.post('/eliminarDEP',departamentoDEL)

router.post('/ingresarEMP',empleadoADD)
router.post('/modificarEMP',empleadoUPD)
router.post('/eliminarEMP',empleadoDEL)

export default router