import pegaArquivo from '../index.js';

//arrayResult one-file-model
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

//describe tests
describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async() => {
        const result = await pegaArquivo('text file path');
        expect(result).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links."', async() => {
        const result = await pegaArquivo('text file path');
        expect(result).toBe('url not found.')
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('text file path')).rejects.toThrow("EISDIR")
    })
    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('text file path')).resolves.toEqual(arrayResult)
    })
})
