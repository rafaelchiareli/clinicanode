"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const porta = 3000;
app_1.app.listen(porta, () => {
    console.log(`servidor rodando em http://localhost:${porta}`);
    console.log(`Swagger em http://localhost:${porta}/docs`);
});
