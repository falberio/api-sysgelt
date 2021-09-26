import { Router } from 'express';

import { choferesController } from '../controllers/choferesController';

class ChoferesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', choferesController.list);
        this.router.get('/lastChofer', choferesController.getLastChofer);
        this.router.get('/:id', choferesController.getOne);
        this.router.post('/', choferesController.create);
        this.router.delete('/:id', choferesController.delete);
        this.router.put('/:id', choferesController.update);
    }
}

const choferesRoutes = new ChoferesRoutes();
export default choferesRoutes.router;