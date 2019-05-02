import { Router, Request, Response } from 'express'
import MySQL from '../mysql'

const router = Router()

router.get('/heroes', (req: Request, res: Response) => {
  const query = `
    SELECT * FROM heroes;
  `

  MySQL.executeQuery(query, (err:any, heroes: Object[]) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: {
          message: err
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
  const escapeId = MySQL.instance.cnn.escape(id)

  const query = `
    SELECT * FROM heroes WHERE idHeroes = ${escapeId};
  `

  MySQL.executeQuery(query, (err:any, heroe: Object[]) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: {
          message: err
        }
      })
    }

    res.json({
      ok: true,
      heroe: heroe[0]
    })
  })
})

export default router
