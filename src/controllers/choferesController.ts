import { Request, Response} from 'express';

import db from '../database';

class ChoferesController{

    public async list (req: Request, res: Response) {
        const choferes = await db.query('SELECT * , ch.id as id, ch.email as email, ch.nombre as nombre, tr.nombre as transporte FROM choferes ch INNER JOIN transportes tr ON ch.transporte_id = tr.id');
        res.json(choferes);
    }

    public async getLastChofer(req: Request, res: Response) {
        const lastChofer = await db.query(
            'SELECT id FROM choferes ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastChofer);
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const chofer = await db.query('SELECT * FROM choferes WHERE id = ?', [id]);
        if(chofer.length > 0){
            return res.json(chofer[0]);
        }
        res.status(404).json({message: 'El chofer no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO choferes set?', [req.body]);
        res.json({message: 'Chofer creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM choferes WHERE id = ?', [id]);
        res.json({message: 'Chofer eliminado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE choferes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Chofer actualizado'});
    }

}


export const choferesController = new ChoferesController;