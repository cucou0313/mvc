const fs = require("fs");

exports.getAllTodos = (req, res) => fs.readFile("./Todo.json", 'utf8', function (err, data) {
    var accounts = JSON.parse(data);
    console.log(accounts);
    //输出json格式的字符串
    res.end(JSON.stringify(accounts, null, 2));
})

exports.getTodo = (req, res) => fs.readFile("./Todo.json", 'utf8', function (err, data) {
    var accounts = JSON.parse(data);
    var id = req.params.id;
    console.log(id);
    var isExist = false;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i]["id"] == id) {
            console.log(accounts[i]);
            isExist = true;
            res.send(accounts[i]);
        }
    }
    if (!isExist) {
        console.log("无此id");
        res.status(404).send();
    }
})

exports.createTodo = (req, res) => fs.readFile("./Todo.json", 'utf8', function (err, data) {
    var accounts = JSON.parse(data);
    var newAccount = req.body;
    var isExist = false;
    console.log(req.body);
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i]["id"] === newAccount.id) {
            res.status(400).send();
            isExist = true;
        }
    }
    if (!isExist) {
        console.log("创建新Todo任务");
        newAccount["createdTime"] = Date();
        accounts.push(newAccount);
        console.log(accounts);
        fs.writeFile("./Todo.json", JSON.stringify(accounts));
        res.send(accounts);
    }
})

exports.deleteTodo = (req, res) => fs.readFile("./Todo.json", 'utf8', function (err, data) {
    var accounts = JSON.parse(data);
    var id = req.params.id;
    console.log(id);
    var isExist = false;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i]["id"] == id) {
            // delete accounts[i];
            accounts.splice(i, 1);
            isExist = true;
            console.log(accounts);
            fs.writeFile("./Todo.json", JSON.stringify(accounts));
            res.send(accounts);
        }
    }
    if (!isExist) {
        console.log("无此id");
        res.status(404).send();
    }
})