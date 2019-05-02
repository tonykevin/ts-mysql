import { Router, Request, Response } from 'express'
import MySQL from '../mysql'

const router = Router()

router.get('/heroes', (req: Request, res: Response) => {
  const query = `
    SELECT * FROM heroes;
  `

  MySQL.executeQuery(query, (err:any, heroes: Object[]) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        error: {
          message: 'Tenemos algunos problemas.'
        }
      })
    }

    res.json({
      ok: true,
      heroes
    })

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
