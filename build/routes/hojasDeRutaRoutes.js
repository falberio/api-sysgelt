"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hrsController_1 = require("../controllers/hrsController");
class HojasDeRutaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', hrsController_1.hrsController.list);
        this.router.get('/:id', hrsController_1.hrsController.getOne);
        this.router.post('/', hrsController_1.hrsController.create);
        this.router.delete('/:id', hrsController_1.hrsController.delete);
        this.router.put('/:id', hrsController_1.hrsController.update);
    }
}
const hrsRoutes = new HrsRoutes();
exports.default = hrsRoutes.router;
