import { Router } from 'express';

import { hrsController } from '../controllers/hrsController';

class HrsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', hrsController.list);
        this.router.get('/lastHr', hrsController.getLastHr);
        this.router.get('/:id', hrsController.getOne);
        this.router.post('/', hrsController.create);
        this.router.delete('/:id', hrsController.delete);
        this.router.put('/:id', hrsController.update);
    }
}

const hrsRoutes = new HrsRoutes();
export default hrsRoutes.router;