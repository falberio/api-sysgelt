import { Request, Response} from 'express';

import db from '../database';

class TransportesController{

    public async list (req: Request, res: Response) {
        const transportes = await db.query('SELECT * FROM transportes');
        res.json(transportes);
    }

    public async getLastTransporte(req: Request, res: Response) {
        const lastTransporte = await db.query(
            'SELECT id FROM transportes ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastTransporte);
    }
    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const transporte = await db.query('SELECT * FROM transportes WHERE id = ?', [id]);
        if(transporte.length > 0){
            return res.json(transporte[0]);
        }
        res.status(404).json({message: 'El transporte no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO transportes set?', [req.body]);
        res.json({message: 'Transporte creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM transportes WHERE id = ?', [id]);
        res.json({message: 'Transporte eliminado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE transportes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Transporte actualizado'});
    }

}


export const transportesController = new TransportesController;