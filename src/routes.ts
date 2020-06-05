import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from '../src/controllers/pointsController'
import ItemsController from '../src/controllers/itemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.get('/points', upload.single('image'), pointsController.index)
routes.post('/points', pointsController.create)
routes.get('/points/:id', pointsController.show)

  
export default routes