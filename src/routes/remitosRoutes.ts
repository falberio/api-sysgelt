import { Router } from 'express';

import { remitosController } from '../controllers/remitosController';

class RemitosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', remitosController.list);
        this.router.get('/lastRemito', remitosController.getLastRemito);
        this.router.get('/:id', remitosController.getOne);
        this.router.post('/', remitosController.create);
        this.router.delete('/:id', remitosController.delete);
        this.router.put('/:id', remitosController.update);
    }
}

const remitosRoutes = new RemitosRoutes();
export default remitosRoutes.router;