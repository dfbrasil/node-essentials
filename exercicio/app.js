const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => res.send('olá mundo!'));

app.get("/products", (req,res) => {
    const products = [
      {
        id: 1,
        name: "hammer",
      },
      {
        id: 2,
        name: "screwdriver",
      },
      ,
      {
        id: 3,
        name: "wrench",
      },
    ];
 
   res.json(products);
 })

app.listen(port, () => console.log(`exemplo de um app escutando na porta ${port}!`));
