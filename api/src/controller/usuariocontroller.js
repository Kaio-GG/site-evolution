import { novoUsuario , login , alterarimagem} from "../repositori/usuariorepositori.js";
import { Router } from "express";
import multer from 'multer'

const server= Router()
const upload=multer({dest:'storage/capausuario'})

server.post('/usuario', async (req,resp) => {
    try {
        const novousuario = req.body

        
        if (!novousuario.nome) {
            throw new Error ('campo do nome é obrigatorio')
        }
        if (!novousuario.email) {
            throw new Error ('campo do email é obrigatorio')
        }
        if (!novousuario.senha) {
            throw new Error ('campo da senha é obrigatorio')
        }

        const resposta = await novoUsuario(novousuario)

        resp.send(resposta)
        
    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }

})


server.post('/usuario/login', async (req,resp) => {
    try {
        const { email , senha} = req.body
    
        const resposta = await login (email , senha)   
        
        if(!resposta)
            throw new Error ('credenciais invalidas')

        resp.send(resposta)
    
    
    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }
})
server.put ('/usuario/:id/capa', upload.single('capa') , async (req,resp) => {
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
