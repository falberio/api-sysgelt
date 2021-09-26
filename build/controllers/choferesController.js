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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.choferesController = void 0;
const database_1 = __importDefault(require("../database"));
class ChoferesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const choferes = yield database_1.default.query('SELECT * , ch.id as id, ch.email as email, ch.nombre as nombre, tr.nombre as transporte FROM choferes ch INNER JOIN transportes tr ON ch.transporte_id = tr.id');
            res.json(choferes);
        });
    }
    getLastChofer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastChofer = yield database_1.default.query('SELECT id FROM choferes ORDER BY id DESC LIMIT 0, 1');
            res.json(lastChofer);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const chofer = yield database_1.default.query('SELECT * FROM choferes WHERE id = ?', [id]);
            if (chofer.length > 0) {
                return res.json(chofer[0]);
            }
            res.status(404).json({ message: 'El chofer no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO choferes set?', [req.body]);
            res.json({ message: 'Chofer creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM choferes WHERE id = ?', [id]);
            res.json({ message: 'Chofer eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE choferes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Chofer actualizado' });
        });
    }
}
exports.choferesController = new ChoferesController;
