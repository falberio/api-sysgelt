import { Request, Response} from 'express';

import db from '../database';

class HrsController{

    public async list (req: Request, res: Response) {
        const hojasDeRuta = await db.query('SELECT * , hr.id as id, suc.nombre as sucursal, CONCAT (ch.nombre, " ",ch.apellido) as chofer, tr.nombre as transporte FROM hojas_de_ruta hr INNER JOIN sucursales suc ON hr.sucursal_id = suc.id INNER JOIN choferes ch ON hr.choferes_id = ch.id INNER JOIN transportes tr ON ch.transporte_id = tr.id');
        res.json(hojasDeRuta);
    }

    public async getLastHr(req: Request, res: Response) {
        const lastHr = await db.query(
            'SELECT id FROM hojas_de_ruta ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastHr);
    }
    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const hojaDeRuta = await db.query('SELECT * FROM hojas_de_ruta WHERE id = ?', [id]);
        if(hojaDeRuta.length > 0){
            return res.json(hojaDeRuta[0]);
        }
        res.status(404).json({message: 'La hoja de ruta no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO hojas_de_ruta set?', [req.body]);
        res.json({message: 'Hoja de ruta creada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM hojas_de_ruta WHERE id = ?', [id]);
        res.json({message: 'Hoja de ruta eliminada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE hojas_de_ruta set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Hoja de ruta actualizada'});
    }

}


export const hrsController = new HrsController;