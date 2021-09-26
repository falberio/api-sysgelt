import { Router } from 'express';

import { clientesController } from '../controllers/clientesController';

class ClientesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clientesController.list);
        this.router.get('/lastCliente', clientesController.getLastCliente);
        this.router.get('/:id', clientesController.getOne);
        this.router.post('/', clientesController.create);
        this.router.delete('/:id', clientesController.delete);
        this.router.put('/:id', clientesController.update);
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;