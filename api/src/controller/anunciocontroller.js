import { alteraranuncio, inseriranuncio, removeranuncio , alterarimagem, buscarporid, buscarportipo ,buscarporidanuncio} from "../repositori/anunciorepositori.js";
import { Router } from "express";
import multer from 'multer'

const server= Router()

const upload=multer({dest:'storage/capasanuncio'})

server.post('/anuncio/publicar', async (req,resp) =>{
    try {
    const novoanuncio= req.body

    const anuncio = await inseriranuncio(novoanuncio)
    resp.send(anuncio)


}   catch (error) {
    resp.status(200).send({
        erro:error.message
    })    
    }
})

server.delete('/anuncio/:id', async (req, resp) => {
    try{
        const { id } = req.params 

        const resposta = await removeranuncio(id);
        if(resposta != 1)
            throw new Error ('Anuncio não pode ser removido.');

        resp.status(204).send();
    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    
    }
})


server.put('/anuncio/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const anuncio =  req.body;

        if (!anuncio.nome) {
            throw new Error ('campo do nome é obrigatorio')
        }
        if (!anuncio.valor) {
            throw new Error ('campo do valor é obrigatorio')
        }
        if (!anuncio.tipo) {
            throw new Error ('campo do tipo é obrigatorio')
        }
        if (!anuncio.telefone) {
            throw new Error ('campo do telefone é obrigatorio')
        }
        if (!anuncio.descricao) {
            throw new Error ('campo da descrição é obrigatorio')
        }
        if (!id) {
            throw new Error ('campo do usuario é obrigatorio')
        }

        const resposta = await alteraranuncio(id, anuncio );
        if (resposta != 1) 
            throw new Error ('anuncio não pode ser alterado ')
        else 
            resp.status(204).send();

    }catch(err){
        resp.status(404).send({
            erro:err.message

        })
    }
})

server.get ('/anuncio/buscar/:id', async (req,resp) => {
    try {
        const {id} =req.params

        const resposta = await buscarporid(id)
        if (resposta.length == 0) 
            resp.status (404).send([])
        else
            resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        }) 
    }
})


server.get ('/anuncio/buscar/anuncio/:id', async (req,resp) => {
    try {
        const {id} =req.params

        const resposta = await buscarporidanuncio(id)
        if (resposta.length == 0) 
            resp.status (404).send([])
        else
            resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        }) 
    }
})





server.get ('/anuncio/tipo/:tipo', async (req,resp) => {
    try {
        const {tipo} =req.params

        const resposta = await buscarportipo(tipo)
        if (resposta.length == 0) 
            resp.status (404).send([])
        else
            resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        }) 
    }
})



server.put ('/anuncio/:id/capa', upload.single('capa') , async (req,resp) => {
    try {
        const { id } = req.params
        const imagem = req.file.path

        const resposta = await alterarimagem( imagem , id )
        if(resposta != 1)
            throw new Error ('imagem nao pode ser inserida')

        resp.status(200).send()

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server