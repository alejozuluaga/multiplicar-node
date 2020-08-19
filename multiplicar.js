const fs = require('fs');
const { resolve } = require('path');

let listaTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`);

    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado`);
        })
    });
}

module.exports = {
    crearArchivo,
    listaTabla
}