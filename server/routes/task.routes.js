import { Router } from "express";

const router = Router();

router.get('/tasks')

router.get('/tasks/:id')

router.posts('/tasks')

router.put('/tasks/:id')

router.delete('/tasks/:id')

export default router;