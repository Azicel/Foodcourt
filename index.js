import express, { response } from 'express';
import mssql from 'mssql';
import config from './Config.js';
import { json } from 'express';
import {getUserData, addUser,findUser, findPassword, getUserOrders } from './users.js';
import { addEmployee, findEmployee } from './Employee.js';
import { addDish, getDishes, updateDish,getDishDescription } from './dish.js';
import { addOrder } from './orders.js';
import { getRestDescription } from './restraunt.js';

const PORT = 8080;
const app = express()

app.use(json())
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

app.post('/registration/user',(req,res)=> {
    let userinfo = {...req.body}
    findUser(userinfo.login).then(user => {
        if(!user){
            addUser(userinfo).then(data =>
                {
                    res.status(201).json(data + ' successfully registered');
                })
        }
        else
            res.status(400).json('Login is already taken or is incorrect')
    })
});

app.post('/registration/employee',(req,res)=> {
    let employee = {...req.body}
    findEmployee(employee).then(data => {
        if(!data){
            addEmployee(employee).then(data =>
                {
                    res.status(201).json(data + " successfully registered");
                })
        } 
        else
            res.status(400).json('Login is already taken or is incorrect')
    });
});

app.post('/login/employee',(req,res)=> {
    let login = req.body.Login
    let password = req.body.Password
    if(!(login && password))
    {
        res.status(400).json('Login and Password must be provided');
    }
    findEmployee(login).then(user =>{
        if(user)
            findPassword(login,password).then(user =>
                {
                    if(user)
                    {
                        return res.status(200).json('Login successful!')
                    }
                    else
                    {
                        return res.status(400).json('Login or password incorrect')
                    }
                }
            );
        else
            return res.status(400).json('Login or password incorrect');
        });
});

app.post('/login/user',(req,res)=> {
    let login = req.body.Login
    let password = req.body.Password
    if(!(login && password))
    {
        res.status(400).json('Login and Password must be provided');
    }
    findUser(login).then(user =>{
        if(!user)
            findPassword(login,password).then(user =>
                {
                    if(user)
                    {
                        res.status(200).json('Login successful!')
                    }
                    else
                    {
                        res.status(400).json('Login or password incorrect')
                    }
                }
            );
        else
            return res.status(400).json('Login or password incorrect');
        });
});

app.get('/user/data',(req,res)=> {
    let userLogin = req.query.Login
    getUserData(userLogin).then(data => {
        res.status(200).json(data);
    })
});

app.get('/user/orders',(req,res)=> {
    let userLogin = req.query.Login
    console.log(userLogin)
    getUserOrders(userLogin).then(data => {
        res.status(200).json(data);}
    )
});

app.get('/restraunt/description', (req,res)=> {
    let restraunt_id = {...req.query.Restaurant_ID}[0]
    getRestDescription(restraunt_id).then(data => res.status(200).json(data))
});

app.post('/dishes/add', (req,res) => {
    let dish = {...req.body}
    addDish(dish).then(dish =>
        {
            res.status(200).json(dish);
        })
});

app.patch('/dishes/edit', (req,res) => {
    let dish = {...req.body}
    updateDish(dish).then(dish =>
        {
            res.status(200).json(dish);
        });
});

app.get('/dishes/menu', (req,res) => {
    let restraunt_id = req.query.Restaurant_ID
    res.send(getDishes(restraunt_id))
});

app.get('/dishes/description', (req,res) => {
    let Restaurant_ID = req.query.Restaurant_ID
    let Dish_ID = req.query.Dish_ID
    console.log(Restaurant_ID + " " + Dish_ID)
    getDishDescription(Restaurant_ID,Dish_ID).then(data => res.status(200).json(data));
});

app.post('/orders/create', (req,res) => {
    let order = {...req.body}
    console.log(req.body);
    addOrder(order).then(order =>
        {
            res.status(200).json(order);
        });
});



function startApp(){
    try{
        getEmp();
        app.listen(PORT, function () {console.log('Server Started ON PORT ' + PORT)})
    } catch(err){
        console.log(err);
    }
}

async function getEmp(){
    var conn = new mssql.ConnectionPool(config);    

    await conn.connect(function (err){
        if(err){   
            console.log(err);
        }
        else{
            console.log('Connection to DB established');
        }
    });
}

startApp()