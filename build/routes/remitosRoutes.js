"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const remitosController_1 = require("../controllers/remitosController");
class RemitosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', remitosController_1.remitosController.list);
        this.router.get('/lastRemito', remitosController_1.remitosController.getLastRemito);
        this.router.get('/:id', remitosController_1.remitosController.getOne);
        this.router.post('/', remitosController_1.remitosController.create);
        this.router.delete('/:id', remitosController_1.remitosController.delete);
        this.router.put('/:id', remitosController_1.remitosController.update);
    }
}
const remitosRoutes = new RemitosRoutes();
exports.default = remitosRoutes.router;
