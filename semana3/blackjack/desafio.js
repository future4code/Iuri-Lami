
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
 
   const cartaUmUsuario = comprarCarta();
   const cartaDoisUsuario = comprarCarta();
   
   if (cartaUmUsuario.valor+cartaDoisUsuario.valor < 22){
      arrayUsuario = [cartaUmUsuario,cartaDoisUsuario]
   }
   else {
      const cartaUmUsuario = comprarCarta();
      const cartaDoisUsuario = comprarCarta();
      arrayUsuario = [cartaUmUsuario,cartaDoisUsuario] 
   }
   
   const pontuacaoUsuario = (cartaUmUsuario.valor+cartaDoisUsuario.valor)
   // console.log("Usuário - cartas: "+cartaUmUsuario.texto+" "+cartaDoisUsuario.texto+" - pontuação "+(pontuacaoUsuario))
  
   const cartaUmPC = comprarCarta();
   const cartaDoisPC = comprarCarta();

   if (cartaUmPC.valor+cartaDoisPC.valor < 22){
      arrayPC = [cartaUmPC,cartaDoisPC]
   }
   else {
      const cartaUmPC = comprarCarta();
      const cartaDoisPC = comprarCarta();
      arrayPC = [cartaUmPC,cartaDoisPC]
   }

   console.log("Suas cartas são "+(cartaUmUsuario.valor,cartaUmUsuario.texto),(cartaDoisUsuario.valor,cartaDoisUsuario.texto)+". A carta revelada do computador é "+(cartaUmPC.valor,cartaUmPC.texto)+". Deseja comprar mais uma carta?")
   comprarCarta = confirm("Deseja comprar nova carta?")

   if (comprarCarta)
      let novaCarta = comprarCarta()
      arrayUsuario.push = novaCarta
      for(let somaArrayUsuario of arrayUsuario){

      }

   
   // const pontuacaoPC = (cartaUmPC.valor+cartaDoisPC.valor)
   // console.log("Usuário - cartas: "+cartaUmPC.texto+" "+cartaDoisPC.texto+" - pontuação "+(pontuacaoPC))
   

   if(pontuacaoUsuario>pontuacaoPC){console.log("O usuário ganhou!")}
   else if (pontuacaoPC>pontuacaoUsuario){console.log("O computador ganhou!")}
   else if (pontuacaoPC===pontuacaoUsuario){console.log("Empate!")}
} 
else {
   console.log("O jogo acabou")
}
