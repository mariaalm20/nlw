import knex from 'knex'
import path from 'path'

const connection = knex({
  client : 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite' ) //padroniza o caminho pros SO
  },
  useNullAsDefault: true
})

export default connection