const fs = require('fs'); // libreria de node
const { command } = require('yargs');
const argv = require('yargs').command('listar', 'Imprime en consola la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


//const multiplicar=require('multiplicar');
const { crearArchivo, listaTabla } = require('./multiplicar.js');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listaTabla(argv.base, argv.limite);
        //.then(archivo=>console.log();)
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//const fs=require('express');
//const fs=require('./fs');
/* 
let base = 3;

for (let i = 1; i <= 10; i++) {

    console.log(base * i);
}

fs.writeFile('mensaje.txt', 'Hello node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
 */

//let base = '7';
//console.log(process.argv);

//let argv = process.argv;
//et parametro = argv[2];
//let base = parametro.split('=')[1];

//let argv2 = process.argv;

//console.log('limite: ', argv.limite);
//console.log(argv2);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//    .catch(e => console.log(e));