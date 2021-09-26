import { Router } from 'express';

import { transportesController } from '../controllers/transportesController';

class TransportesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', transportesController.list);
        this.router.get('/lastTransporte', transportesController.getLastTransporte);
        this.router.get('/:id', transportesController.getOne);
        this.router.post('/', transportesController.create);
        this.router.delete('/:id', transportesController.delete);
        this.router.put('/:id', transportesController.update);
    }
}

const transportesRoutes = new TransportesRoutes();
export default transportesRoutes.router;