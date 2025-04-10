
import express from "express";
import jogoController from "../controllers/jogoController.js";
const router = express.Router();
router.get("/", jogoController.getAll);
router.get("/:id", jogoController.getById);
router.post("/", jogoController.create);
router.put("/:id", jogoController.update);
router.delete("/:id", jogoController.delete);
export default router;
