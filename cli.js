#!/usr/bin/env node

import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validação.js';

const caminho = process.argv; //capture path
console.log(process.argv); //observe path

async function processaTexto(caminhoArquivo) {
    const resultado = await pegaArquivo(caminhoArquivo[2]); //Parâmetro 2 do process.argv
    if (caminho[3] === 'validate') {
        console.log(chalk.yellow('Links validados: '), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('Lista de Links: '), resultado);
    }
}

processaTexto(caminho);