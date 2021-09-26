import { Request, Response} from 'express';

import db from '../database';

class ClientesController{

    public async list (req: Request, res: Response) {
        const clientes = await db.query('SELECT * FROM clientes');
        res.json(clientes);
    }

    public async getLastCliente(req: Request, res: Response) {
        const lastCliente = await db.query(
            'SELECT id FROM clientes ORDER BY id DESC LIMIT 0, 1'
        );
        res.json(lastCliente);
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const cliente = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if(cliente.length > 0){
            return res.json(cliente[0]);
        }
        res.status(404).json({message: 'El cliente no existe'});
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO clientes set?', [req.body]);
        res.json({message: 'Cliente creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({message: 'Cliente eliminado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await db.query('UPDATE clientes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Cliente actualizado'});
    }

}


export const clientesController = new ClientesController;