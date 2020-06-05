//knex n suporta a sintax ts
import path from 'path'

module.exports = {
  client : 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database','database.sqlite' ) //padroniza o caminho pros SO
  },
  migrations : {
    directory : path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
  seeds : {
    directory : path.resolve(__dirname, 'src', 'database', 'seeds')
  },

}