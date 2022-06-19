import 'dotenv/config'

import cors from 'cors'
import express from 'express'


import usuariocontroller from './controller/usuariocontroller.js'
import anunciocontroller from './controller/anunciocontroller.js'







const server =express()
server.use(cors())
server.use(express.json())
server.use(usuariocontroller)
server.use(anunciocontroller)
server.use('/storage/capasanuncio', express.static('storage/capasanuncio'));






server.listen( process.env.PORT , () =>  console.log(`API ONLINE NA PORTA ${process.env.PORT}`))