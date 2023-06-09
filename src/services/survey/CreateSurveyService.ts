import prismaClient from '../../prisma';

interface SurveyRequest {
  name: string;
  email: string;
  telefone: string;
  iniciativa?: string;
  anjo?: string;
  valor?: string;
  personName?: string;
}

class CreateSurveyService {
  async execute({ name, email, telefone, iniciativa, anjo, valor, personName }: SurveyRequest) {
    const userAlreadyExists = await prismaClient.survey.findFirst({
      where: { email: email },
    });

    if (userAlreadyExists) {
      throw new Error('Email já cadastrado!');
    }

    try {
      await prismaClient.survey.create({
        data: {
          name: name,
          email: email,
          telefone: telefone,
          experience: iniciativa,
          userAnjo: anjo,
          value: valor,
          personName: personName,
        },
      });

      return true;
    } catch (error) {
      throw new Error('Houve um erro ao salvar');
    }
  }
}

export { CreateSurveyService };
