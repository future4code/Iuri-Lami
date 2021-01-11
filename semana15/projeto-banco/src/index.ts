import express, {Express, Request, Response } from 'express'
import cors from 'cors'
import { accounts } from "./accounts"

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
   try {
      const { nome, CPF, dataNascString } = req.body

      const [dia,mes,ano] = dataNascString.split("/")

      const dataNasc: Date = new Date(`${ano}-${mes}-${dia}`)

      const idadeMiliSegundos: number = Date.now() - dataNasc.getTime()

      const idadeAno: number = idadeMiliSegundos /1000/60/60/24/365

      if(idadeAno < 18){
         res.statusCode = 486
         throw new Error("Idade deve ser maior que 18 anos")
      }

      accounts.push({
         nome,
         CPF,
         dataNasc, 
         saldo: 0,
         extrato: []
      })
      res.status(201).send("Conta criada com sucesso!!")
   } catch (error) {
      console.log(error)
      res.send(error.message)      
   }
})

app.get("/users/all" , (req: Request, res: Response) => {
   try {
      res.status(200).send(accounts)
   }catch (error){
      res.send(error.message)

   }
})

app.listen(3003, () => {
      console.log("Server rodando na porta 3003")
})