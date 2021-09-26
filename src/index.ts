import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import remitosRoutes from './routes/remitosRoutes';
import clientesRoutes from './routes/clientesRoutes';
import hrsRoutes from './routes/hrsRoutes';
import choferesRoutes from './routes/choferesRoutes';
import sucursalesRoutes from './routes/sucursalesRoutes';
import transportesRoutes from './routes/transportesRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false }))
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/remitos', remitosRoutes);
        this.app.use('/api/clientes', clientesRoutes);
        this.app.use('/api/hrs', hrsRoutes);
        this.app.use('/api/choferes', choferesRoutes);
        this.app.use('/api/sucursales', sucursalesRoutes);
        this.app.use('/api/transportes', transportesRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ', this.app.get('port'));
        });
    }
}


const server = new Server();
server.start();