import con from '../database/connection.js'

export const departamentoLIS = async (req, res) => {
    con.query('SELECT * FROM departamentos', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        console.log(result)
        res.render('departamento',{data:result});
    })
}

export const departamentoADD = async (req, res) => {
    const { codigo, nombre, descripcion } = req.body
    
    // construir la data que será insertada
    const data = {
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion
    }

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('INSERT INTO departamentos SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/departamento')
    })
    
}

export const departamentoUPD = async (req, res) => {
    const { codigo, nombre, descripcion } = req.body
    
    // construir la data que será insertada
    const data = [nombre,descripcion,codigo]

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('UPDATE departamentos SET nombre=?,descripcion=? WHERE codigo=?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/departamento')
    })
    
}

export const departamentoDEL = async (req, res) => {
    const { codigo } = req.body
    
    // construir la data que será insertada
    const data = [codigo]

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('DELETE FROM departamentos WHERE codigo=?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/departamento')
    })
    
}