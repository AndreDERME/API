import express, { json, request, response } from "express" 
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express ()

app.use(express.json())


const users = []


app.post ("/usuarios", async (request, response) =>{
    
   await prisma.User.creat({
        data: {
            email: req.body.email,
            name: req.body,name,
            age: req.body.age
        }

    })

    response.status(201).json(request.body)

})

app.get("/usuarios", (request, response) => {
    
    response.status(200).json(users)

})

app.listen (3000)

/*            missão
    criar uma api para os usuarios

    -criar um usuario
    -listar todos 
    -editar um usuario
    -deletar um usuario

    login no bd
    andredermee_db_user
    Andred.02
*/ 
