"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.create({
            data: {
                username,
                password,
                email,
            }
        });
        console.log(res);
    });
}
// insertUser("abhimanyu","xyz123","ab@iitk.ac.in")
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findFirst({
            where: {
                username: username
            }
        });
        console.log(user);
    });
}
getUser("admin");
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(todo);
    });
}
// getUser(1, "goto")
createTodo(75, "goto gym", "go to gym after CS771");
