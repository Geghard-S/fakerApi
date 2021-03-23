const { request, response } = require("express");
const faker = require("faker");
const express = require("express");
const app = express();

class User{
    constructor(){
        this.id = faker.random.number();
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.random.number();
        this.name = faker.name.firstName();
        this.address = `${faker.address.streetAddress()} 
                        ${faker.address.city()} 
                        ${faker.address.zipCode()} 
                        ${faker.address.state()}
                        ${faker.address.country()}`
    }
}


app.get("/", (request, response) => {
    console.log(request);
    response.send("HEllo there")
})
app.get("/user/new", (req, res) => {
    console.log(req.body);
    res.json(new User());
})

app.get("/user/new2", (req, res) => {
    console.log(req.body);
    res.json(new Company());
})

app.get("/user/:id", (request, response) => {
    console.log(request.params);
    response.send("this is params");
})


app.post("/user/new", (req, res) => {
    console.log(req.body);
    res.send("The is Post");
})



app.listen(8007, () => {
    console.log("Running on Port 8007");
})


