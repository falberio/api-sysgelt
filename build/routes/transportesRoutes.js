"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transportesController_1 = require("../controllers/transportesController");
class TransportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', transportesController_1.transportesController.list);
        this.router.get('/lastTransporte', transportesController_1.transportesController.getLastTransporte);
        this.router.get('/:id', transportesController_1.transportesController.getOne);
        this.router.post('/', transportesController_1.transportesController.create);
        this.router.delete('/:id', transportesController_1.transportesController.delete);
        this.router.put('/:id', transportesController_1.transportesController.update);
    }
}
const transportesRoutes = new TransportesRoutes();
exports.default = transportesRoutes.router;
