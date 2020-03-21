const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const {
    getTodo,
    getAllTodos,
    createTodo,
    deleteTodo
} = require('./control.js')

//返回所有Todo任务
app.get("/", getAllTodos);
//返回一个指定ID的Todo任务
app.get("/:id", getTodo);
//创建一个新的Todo任务
app.post("/", createTodo);
//删除一个的Todo任务
app.delete("/:id", deleteTodo);

// app.get('/', function (req, res) {
//     fs.readFile("./Todo.json", 'utf8', function (err, data) {
//         var accounts = JSON.parse(data);
//         console.log(accounts);
//         res.end(accounts);
//     });
// })

//返回一个指定ID的Todo任务
// app.get('/:id', function (req, res) {
//     fs.readFile("./Todo.json", 'utf8', function (err, data) {
//         var accounts = JSON.parse(data);
//         var id = req.params.id;
//         console.log(id);
//         var isExist = false;
//         for (var i = 0; i < accounts.length; i++) {
//             if (accounts[i]["id"] == id) {
//                 console.log(accounts[i]);
//                 isExist = true;
//                 res.send(accounts[i]);
//             }
//         }
//         if (!isExist) {
//             console.log("无此id");
//             res.status(404).send();
//         }
//     });
// })

//创建一个新的Todo任务
// app.post('/', function (req, res) {
//     fs.readFile("./Todo.json", 'utf8', function (err, data) {
//         var accounts = JSON.parse(data);
//         var newAccount = req.body;
//         var isExist = false;
//         console.log(req.body);
//         for (var i = 0; i < accounts.length; i++) {
//             if (accounts[i]["id"] === newAccount.id) {
//                 res.status(400).send();
//                 isExist = true;
//             }
//         }
//         if (!isExist) {
//             console.log("创建新Todo任务");
//             newAccount["createdTime"] = Date();
//             accounts.push(newAccount);
//             console.log(accounts);
//             fs.writeFile("./Todo.json", JSON.stringify(accounts));
//             res.send(accounts);
//         }
//     });
// })


//删除一个的Todo任务
// app.delete('/:id', function (req, res) {
//     fs.readFile("./Todo.json", 'utf8', function (err, data) {
//         var accounts = JSON.parse(data);
//         var id = req.params.id;
//         console.log(id);
//         var isExist = false;
//         for (var i = 0; i < accounts.length; i++) {
//             if (accounts[i]["id"] == id) {
//                 // delete accounts[i];
//                 accounts.splice(i, 1);
//                 isExist = true;
//                 console.log(accounts);
//                 fs.writeFile("./Todo.json", JSON.stringify(accounts));
//                 res.send(accounts);
//             }
//         }
//         if (!isExist) {
//             console.log("无此id");
//             res.status(404).send();
//         }
//     });
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))