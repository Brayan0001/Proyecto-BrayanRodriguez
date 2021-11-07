import con from '../database/connection.js'

export const empleadoLIS = async (req, res) => {
    con.query('SELECT * FROM empleados', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        console.log(result)
        res.render('empleado',{data:result});
    })
}

export const empleadoADD = async (req, res) => {
    const { identidad, nombre, telefono,direccion,observaciones } = req.body
    
    // construir la data que será insertada
    const data = {
        identidad:identidad,
        nombre:nombre,
        telefono:telefono,
        direccion:direccion,
        observaciones:observaciones
    }

    console.log(data)

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('INSERT INTO empleados SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/empleado')
    })
    
}

export const empleadoUPD = async (req, res) => {
    const { identidad, nombre, telefono,direccion,observaciones } = req.body
    
    // construir la data que será insertada
    const data = [nombre, telefono,direccion,observaciones,identidad]

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('UPDATE empleados SET nombre=?, telefono=?,direccion=?,observaciones=? WHERE identidad=?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/empleado')
    })
    
}

export const empleadoDEL = async (req, res) => {
    const { identidad } = req.body
    
    // construir la data que será insertada
    const data = [identidad]

    // construir el query con la sintaxis INSERT
    // consultas preparadas
    con.query('DELETE FROM empleados WHERE identidad=?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }

        res.redirect('/empleado')
    })
    
}