import { Router } from 'express';
import { CreateSurveyController } from './controllers/survey/CreateSurveyController';
import { CreatePersonagemController } from './controllers/personagem/CreatePersonagemController';
var Recaptcha = require('express-recaptcha').RecaptchaV3;

var r = new Recaptcha(process.env.SITE_KEY, process.env.SECRET_KEY);

const router = Router();

router.post('/', r.middleware.verify, new CreateSurveyController().handle);
router.post('/personagem', new CreatePersonagemController().handle);

export { router };
