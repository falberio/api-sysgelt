"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const choferesController_1 = require("../controllers/choferesController");
class ChoferesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', choferesController_1.choferesController.list);
        this.router.get('/lastChofer', choferesController_1.choferesController.getLastChofer);
        this.router.get('/:id', choferesController_1.choferesController.getOne);
        this.router.post('/', choferesController_1.choferesController.create);
        this.router.delete('/:id', choferesController_1.choferesController.delete);
        this.router.put('/:id', choferesController_1.choferesController.update);
    }
}
const choferesRoutes = new ChoferesRoutes();
exports.default = choferesRoutes.router;
