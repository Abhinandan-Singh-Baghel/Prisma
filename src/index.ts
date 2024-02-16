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

insertUser("abhimanyu","xyz123","ab@iitk.ac.in")

async function getUser(username: string){
    const user = await prisma.users.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

getUser("admin");