import express from 'express';
import router from './routes.js';
import { conectarBancoDeDados } from './dados/database.js';
async function main() {
   await conectarBancoDeDados();
}
main()
const app = express();
app.use(router)

app.listen(3000, () => console.log('rodando o servidor http://localhost:3000'));
