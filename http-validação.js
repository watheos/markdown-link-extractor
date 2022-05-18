import fetch from 'node-fetch'; 

//error
function manejaErros(erro) {
    throw new Error(erro.message);
}

//status check
async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
        .all(arrayURLs
          .map(async url => {
            const response = await fetch(url);
            return `${response.status} - ${response.statusText}`;
      }))
      return arrayStatus;   
        } catch (erro) {
            manejaErros(erro);
    }
}

//url generator
function geraArrayURLs(arrayLinks) {
    return arrayLinks
      .map(objetoLink => Object
        .values(objetoLink).join())
}

//url validation
async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks
      .map((objeto, indice) => (
        { ...objeto, 
          Status: statusLinks[indice] }
))
    return resultados;
}

export default validaURLs;