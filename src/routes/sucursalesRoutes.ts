import { Router } from 'express';

import {  sucursalesController } from '../controllers/sucursalesController';

class SucursalesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',  sucursalesController.list);
        this.router.get('/lastSucursal', sucursalesController.getLastSucursal);
        this.router.get('/:id',  sucursalesController.getOne);
        this.router.post('/',  sucursalesController.create);
        this.router.delete('/:id',  sucursalesController.delete);
        this.router.put('/:id',  sucursalesController.update);
    }
}

const sucursalesRoutes = new SucursalesRoutes();
export default  sucursalesRoutes.router;