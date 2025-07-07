import { Router } from "express";
import { getArriendos,getArriendosActivos, getArriendosTerminados, crearArriendo,editarArriendo, borrarArriendo  } from "./handlers/arriendos";

const router = Router()

//Arriendos

//activos
router.get('/arriendos',getArriendos)
router.get('/arriendos/activos',getArriendosActivos)
router.get('/arriendos/terminados',getArriendosTerminados)
router.post('/arriendos',crearArriendo)
router.put('/arriendos/:id',editarArriendo)
router.delete('/arriendos/:id', borrarArriendo);


export default router
