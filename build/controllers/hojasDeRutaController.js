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
exports.hojasDeRutaController = void 0;
const database_1 = __importDefault(require("../database"));
class HojasDeRutaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hojasDeRuta = yield database_1.default.query('SELECT * FROM hojas_de_ruta');
            res.json(hojasDeRuta);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const hojaDeRuta = yield database_1.default.query('SELECT * FROM hojas_de_ruta WHERE id = ?', [id]);
            if (hojaDeRuta.length > 0) {
                return res.json(hojaDeRuta[0]);
            }
            res.status(404).json({ message: 'La hoja de ruta no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO hojas_de_ruta set?', [req.body]);
            res.json({ message: 'Hoja de ruta creada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM hojas_de_ruta WHERE id = ?', [id]);
            res.json({ message: 'Hoja de ruta eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE hojas_de_ruta set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Hoja de ruta actualizada' });
        });
    }
}
exports.hojasDeRutaController = new HojasDeRutaController;
