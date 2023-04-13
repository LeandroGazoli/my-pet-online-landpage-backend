import { Request, Response } from 'express';
import { CreateSurveyService } from '../../services/survey/CreateSurveyService';

class CreateSurveyController {
  async handle(req: Request, res: Response) {
    const { name, email, telefone, iniciativa, anjo, valor } = req.body;

    const createSurveyService = new CreateSurveyService();

    const survey = await createSurveyService.execute({ name, email, telefone, iniciativa, anjo, valor });

    console.log(survey);

    return res.json(survey);
  }
}

export { CreateSurveyController };
