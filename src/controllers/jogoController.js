import jogoModel from "../models/jogoModel.js";

class JogoController {
  getAll = async (req, res) => {
    try {
      const jogos = await jogoModel.getAll();
      res.json(jogos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar os jogos" });
    }
  };
  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const jogo = await jogoModel.getById(id);
      if (!jogo) {
        return res.status(404).json({ erro: "jogo não encontrado" });
      }
      res.json(jogo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar jogo" });
    }
  };

  create = async(req, res) => {
    const { title,
      price,
      releaseYear,
      developer,
      genres,
      platforms,
      imageUrl} = req.body;
    try {
    if (!title || !price || !releaseYear || !developer || !genres || !platforms || !imageUrl) {
      return res.status(400).json({ erro: "Descrição é obrigatória" });
    }
    
    const novoJogo = await jogoModel.create(title,
      price,
      releaseYear,
      developer,
      genres,
      platforms,
      imageUrl);
    res.status(201).json(novoJogo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao criar jogo" });
  }
  };
  update = async (req, res) => {
const { id } = req.params;
const {title,
  price,
  releaseYear,
  developer,
  genres,
  platforms,
  imageUrl} = req.body;

try {
const jogoAtualizado = await jogoModel.update(Number(id), 
  title,
  price,
  releaseYear,
  developer,
  genres,
  platforms,
  imageUrl
);

if (!jogoAtualizado) {
  return res.status(404).json({ erro: "jogo não encontrado" });
}

res.json(jogoAtualizado);
} catch (error) {
  console.error(error);
  res.status(500).json({ erro: "Erro ao atualizar jogo" });
}
  };
  
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const sucesso = await jogoModel.delete(Number(id));
      if (!sucesso) {
        return res.status(404).json({ erro: "jogo não encontrado" });
      }
      res.status(200).send({ message: "jogo deletado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar jogo" });
    }
  };
}
export default new JogoController();
