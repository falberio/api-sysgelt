import { Request, Response} from 'express';

import db from '../database';

class SucursalesController{

    public async list (req: Request, res: Response) {
        const sucursales = await db.query('SELECT * FROM sucursales');
        res.json(sucursales);
    }

    public async getLastSucursal(req: Request, res: Response) {
        const lastSucursal = await db.query(
            'SELECT id FROM sucursales ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastSucursal);
    }
    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const sucursal = await db.query('SELECT * FROM sucursales WHERE id = ?', [id]);
        if(sucursal.length > 0){
            return res.json(sucursal[0]);
        }
        res.status(404).json({message: 'La sucursal no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO sucursales set?', [req.body]);
        res.json({message: 'Sucursal creada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM sucursales WHERE id = ?', [id]);
        res.json({message: 'Sucursal eliminada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE sucursales set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Sucursal actualizada'});
    }

}


export const sucursalesController = new SucursalesController;