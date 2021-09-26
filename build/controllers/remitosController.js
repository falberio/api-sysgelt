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
exports.remitosController = void 0;
const database_1 = __importDefault(require("../database"));
class RemitosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const remitos = yield database_1.default.query('SELECT * , r.id as id, r.created_at as created_at, c1.nombre as nombre_r, c1.domicilio as domicilio_r, c1.localidad as localidad_r, c1.provincia as provincia_r, c1.telefono as telefono_r, c1.email as email_r, c2.nombre as nombre_d, c2.domicilio as domicilio_d, c2.localidad as localidad_d, c2.provincia as provincia_d, c2.telefono as telefono_d, c2.email as email_d FROM remitos r INNER JOIN clientes c1 ON r.remitente_id = c1.id INNER JOIN clientes c2 ON r.destinatario_id = c2.id ORDER BY r.id DESC');
            res.json(remitos);
        });
    }
    getLastRemito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastRemito = yield database_1.default.query('SELECT id FROM remitos ORDER BY id DESC LIMIT 0, 1');
            res.json(lastRemito);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const remito = yield database_1.default.query('SELECT * FROM remitos WHERE id = ?', [id]);
            if (remito.length > 0) {
                return res.json(remito[0]);
            }
            res.status(404).json({ message: 'El remito no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO remitos set?', [req.body]);
            res.json({ message: 'Remito creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM remitos WHERE id = ?', [id]);
            res.json({ message: 'Remito eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE remitos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Remito actualizado' });
        });
    }
}
exports.remitosController = new RemitosController;
