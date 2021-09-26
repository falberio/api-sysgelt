import { Request, Response} from 'express';

class IndexController{

    public index (req: Request,res: Response) {
        res.json({message: 'API is /api/remitos'});
    }

}


export const indexController = new IndexController;