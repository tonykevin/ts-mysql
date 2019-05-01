import { Router, Request, Response } from 'express'

const router = Router()

router.get('/heroes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'All is ok'
  })
})

router.get('/heroes/:id', (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    ok: true,
    message: 'All is ok',
    id
  })
})

export default router
