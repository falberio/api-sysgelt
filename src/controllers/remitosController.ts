import { Request, Response} from 'express';

import db from '../database';

class RemitosController{

    public async list (req: Request, res: Response) {
        const remitos = await db.query(
            'SELECT * , r.id as id, r.created_at as created_at, c1.nombre as nombre_r, c1.domicilio as domicilio_r, c1.localidad as localidad_r, c1.provincia as provincia_r, c1.telefono as telefono_r, c1.email as email_r, c2.nombre as nombre_d, c2.domicilio as domicilio_d, c2.localidad as localidad_d, c2.provincia as provincia_d, c2.telefono as telefono_d, c2.email as email_d FROM remitos r INNER JOIN clientes c1 ON r.remitente_id = c1.id INNER JOIN clientes c2 ON r.destinatario_id = c2.id ORDER BY r.id DESC'
            );
        res.json(remitos);
    }

    public async getLastRemito(req: Request, res: Response) {
        const lastRemito = await db.query(
            'SELECT id FROM remitos ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastRemito);
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const remito = await db.query('SELECT * FROM remitos WHERE id = ?', [id]);
        if(remito.length > 0){
            return res.json(remito[0]);
        }
        res.status(404).json({message: 'El remito no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO remitos set?', [req.body]);
        res.json({message: 'Remito creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM remitos WHERE id = ?', [id]);
        res.json({message: 'Remito eliminado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE remitos set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Remito actualizado'});
    }

}


export const remitosController = new RemitosController;