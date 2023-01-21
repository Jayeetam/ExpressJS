const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.urlencoded({extended:false}));


app.get("/", (req, res) => {
  fs.readFile("username.txt", (err, data) => {
    if(err){
      console.log(err);
      data='No chat exists';
    }
    res.send(
      `${data}<form onsubmit="localStorage.setItem("username", document.getElementById("username").value)" 
          action="/" method="POST">
          <input id="username" type="hidden" name="username">
          <input id="message" type="text" name="message">
          <button type="submit">send</button>
      </form>`
    )
  })
});

//<input id="username" type="text" name"title">
//<button type="submit">add</button>
//</form>
app.post("/",(req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, {flag:"a"}, (err) => 
    err ? console.log(err): res.redirect("/"));
});

app.get("/login",(req, res) => {
  res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">
      <input type="text" name="username" id="username">
      <input id="message" type="hidden" name="message"><br>
      <button type="submit">login</button>
    </form>`
  );
});

//<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"></form>

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(8000);