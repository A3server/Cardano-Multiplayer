const express = require("express");
const app = express();
//const indexRoutes = require("./API/routes/index");

//const requests = require("./API/.....")

app.use(express.urlencoded({
  extended: false
}));



//app.use("/", indexRoutes);


// ERROS
//req = o que recebemos, res = resposta que damos
app.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {

    const status = err.status || 500; //se nao existir o status do erro, envia 500
    //se exitir erro (por exemplo 404 se nao exitir) envia isto:
    res.status(status).json({
      message: err.message
    });
});

module.exports = app;