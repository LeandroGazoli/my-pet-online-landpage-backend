import prismaClient from '../../prisma';

interface PersonagemRequest {
  name: string;
}

class CreatePersonagemService {
  async execute({ name }: PersonagemRequest) {
    if (!name) {
      throw new Error('Name is required!');
    }

    const response = prismaClient.personName.create({
      data: {
        name: name,
      },
    });

    return response;
  }
}

export { CreatePersonagemService };
