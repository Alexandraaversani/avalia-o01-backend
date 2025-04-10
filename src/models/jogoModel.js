import prisma from '../../prisma/client.js';

class JogoModel {
  getAll = async () => {
    return await prisma.jogo.findMany();
  };
getById = async (id) => { 
    return await prisma.jogo.findUnique({
      where: { id },
    });
  };

  create = async (title,
    price,
    releaseYear,
    developer,
    genres,
    platforms,
    imageUrl) => {
    return await prisma.jogo.create({
      data: {
   title,
  price,
  releaseYear,
  developer,
  genres,
  platforms,
  imageUrl
      },
    })
  };


  update = async (id, title,
    price,
    releaseYear,
    developer,
    genres,
    platforms,
    imageUrl) => {
    try {
      const jogo = await prisma.jogo.update({
        where: { id },
        data: {
          title,
          price,
          releaseYear,
          developer,
          genres,
          platforms,
          imageUrl
        },
      });
      return jogo;
    } catch (error) {
      console.log("Error", error);
      throw error
    }

  };
  delete = async (id) => {
    try {
      const jogoDeletado = await prisma.jogo.delete({
        where: { id },
      });
      return jogoDeletado;
    } catch (error) {
      console.error("Error ao deletar a jogo!", error);
      throw error;
    }
  };
}
export default new JogoModel();
