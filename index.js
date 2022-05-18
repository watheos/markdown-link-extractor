
import fs from 'fs';
//import path from 'path';
//import chalk from 'chalk'; 

function tratarErro(erro) {
  throw new Error(erro.code, '- File not found')
}

//extract links
function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
  const arrayResultados = []
  let tmp;
  while ((tmp = regex.exec(texto)) !== null) { //Enquanto tmp for diferente de Null, percorra texto;
    arrayResultados.push({ [tmp[1]]: tmp[2] }) //A chave é o índice 1 e o valor dessa chave é o índice 2
  }
  return arrayResultados.length === 0 ? 'url not found.' : arrayResultados;
}

//capture file
async function pegaArquivo(pathFile){
  const encoding = 'utf-8';
  try {
  const text = await fs.promises.readFile(pathFile, encoding)
  return extraiLinks(text);
  } catch (error) {
    tratarErro(error);
    } finally {
      console.log('Operation Done');
  }
}

export default pegaArquivo;

/* //Select a dir
async function pegaArquivoDir(caminho) {
const caminhoAbsoluto = path.join("__dirname", '..', caminho); 
  console.log(chalk.magenta(caminhoAbsoluto));
  console.log(chalk.magenta(caminho));
  const encoding = 'utf-8';
  try {
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    console.log(chalk.magenta(arquivos));
    const result = await Promise.all(arquivos.map(async (arquivo) => {
      console.log(chalk.magenta(arquivo));
      const localArquivo = `${caminhoAbsoluto}/${arquivo}`; 
      console.log(chalk.magenta(localArquivo));
      const texto = await fs.promises.readFile(localArquivo, encoding); 
      return extraiLinks(texto); 
    }));
    return result;
  } catch (erro) {
    return trataErro(erro);
  }
 }

pegaArquivo('./arquivos/texto1.md');
*/