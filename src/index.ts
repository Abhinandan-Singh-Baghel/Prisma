import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, email: string) {

    const res = await prisma.users.create({
        data: {
            username,
            password,
            email,
            
        }
    })
    console.log(res);
    
}

// insertUser("abhimanyu","xyz123","ab@iitk.ac.in")

async function getUser(username: string){
    const user = await prisma.users.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

// getUser("admin");

async function createTodo(userId: number, title: string, description: string){
    const todo = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    });
    console.log(todo);
}

// getUser(1, "goto")
// createTodo(75,"goto gym","go to gym after CS771");


async function getTodos(userId: number, ){
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,

        },
    });
    console.log(todos);
}

getTodos(75);