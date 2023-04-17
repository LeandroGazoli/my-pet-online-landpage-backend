import { Request, Response } from 'express';
import { CreatePersonagemService } from '../../services/personagem/CreatePersonagemService';

class CreatePersonagemController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createPersonagemService = new CreatePersonagemService();

    const response = await createPersonagemService.execute({ name });

    console.log(response);

    res.json(response);
  }
}

export { CreatePersonagemController };
