"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const remitosRoutes_1 = __importDefault(require("./routes/remitosRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const hrsRoutes_1 = __importDefault(require("./routes/hrsRoutes"));
const choferesRoutes_1 = __importDefault(require("./routes/choferesRoutes"));
const sucursalesRoutes_1 = __importDefault(require("./routes/sucursalesRoutes"));
const transportesRoutes_1 = __importDefault(require("./routes/transportesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/remitos', remitosRoutes_1.default);
        this.app.use('/api/clientes', clientesRoutes_1.default);
        this.app.use('/api/hrs', hrsRoutes_1.default);
        this.app.use('/api/choferes', choferesRoutes_1.default);
        this.app.use('/api/sucursales', sucursalesRoutes_1.default);
        this.app.use('/api/transportes', transportesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
