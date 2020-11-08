//usei o express pra criar e configurar o meu servidor
const express = require("express")
const server = express()


//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
  express: server,
  noCache: true,
})

/*criei uma rota
e capturo o pedido do cliente*/
server.get("/", function(req, res){
  return res.render("index.html")
})

server.get("/agendas", function(req, res){
  return res.render("agendas.html")
})

server.get("/aventuras", function(req, res){
  return res.render("aventuras.html")
})


server.get("/bateVolta", function(req, res){
  return res.render("bateVolta.html")
})


server.get("/bateVoltaPNE", function(req, res){
  return res.render("bateVoltaPNE.html")
})


server.get("/camisas", function(req, res){
  return res.render("camisas.html")
})


server.get("/canecas", function(req, res){
  return res.render("canecas.html")
})


server.get("/dicas", function(req, res){
  return res.render("dicas.html")
})


server.get("/eventos", function(req, res){
  return res.render("eventos.html")
})


server.get("/fds", function(req, res){
  return res.render("fds.html")
})


server.get("/feriados", function(req, res){
  return res.render("feriados.html")
})

server.get("/formulario", function(req, res){
  return res.render("formulario.html")
})


server.get("/guias", function(req, res){
  return res.render("guias.html")
})


server.get("/iniciantes", function(req, res){
  return res.render("iniciantes.html")
})


server.get("/noticiaPNE1", function(req, res){
  return res.render("noticiaPNE1.html")
})


server.get("/noticiaPNE2", function(req, res){
  return res.render("noticiaPNE2.html")
})


server.get("/noticiaPNE3", function(req, res){
  return res.render("noticiaPNE3.html")
})


server.get("/noticiasCBME", function(req, res){
  return res.render("noticiasCBME.html")
})


server.get("/noticiasDois", function(req, res){
  return res.render("noticiasDois.html")
})


server.get("/noticiasPrincipal", function(req, res){
  return res.render("noticiasPrincipal.html")
})


server.get("/noticiasTres", function(req, res){
  return res.render("noticiasTres.html")
})


server.get("/parceiros", function(req, res){
  return res.render("parceiros.html")
})


server.get("/pedraBonita", function(req, res){
  return res.render("pedraBonita.html")
})


server.get("/picoTijuca", function(req, res){
  return res.render("picoTijuca.html")
})


server.get("/picoTijuca2", function(req, res){
  return res.render("picoTijuca2.html")
})


server.get("/pnePrincipal", function(req, res){
  return res.render("pnePrincipal.html")
})


server.get("/produtos", function(req, res){
  return res.render("produtos.html")
})


server.get("/rafting", function(req, res){
  return res.render("rafting.html")
})


server.get("/sobre", function(req, res){
  return res.render("sobre.html")
})


server.get("/submit", function(req, res){
  return res.render("submit.html")
})


//liguei na porta 3000
server.listen(3000)