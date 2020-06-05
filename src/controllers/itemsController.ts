import {Request, Response} from 'express'
import knex from '../database/connections'

class ItemsController {
  async index(req : Request, res : Response) {
    const items = await knex('items').select('*')
  
    const searialazedItems = items.map(item => {
      return { 
        id : item.id,
        title : item.title,
        image_url: `http://localhost:3333/uploads/${item.image}` /*`http://192.168.15.10:3333/uploads/${item.image}`*/
      }
    })
  
    return res.json(searialazedItems)
   }
}

export default ItemsController