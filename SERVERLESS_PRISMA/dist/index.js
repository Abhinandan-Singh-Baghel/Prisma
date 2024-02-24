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
const hono_1 = require("hono");
const default_index_1 = require("@prisma/client/scripts/default-index");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const adapter_1 = require("hono/adapter");
const app = new hono_1.Hono();
app.post('/', (c) => __awaiter(void 0, void 0, void 0, function* () {
    // Todo add zod validation
    const body = yield c.req.json();
    const { DATABASE_URL } = (0, adapter_1.env)(c);
    const prisma = new default_index_1.PrismaClient({
        datasourceUrl: DATABASE_URL,
    }).$extends((0, extension_accelerate_1.withAccelerate)());
    console.log(body);
    yield prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    });
    return c.json({ msg: "AS" });
}));
exports.default = app;
