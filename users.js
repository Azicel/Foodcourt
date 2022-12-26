import config from './Config.js';
import mssql from 'mssql';
class User{
    constructor(Login,Full_Name,Birthday,Sex,TelNumber,Email,Password){
    this.Login = Login;
    this.Full_Name = Full_Name;
    this.Birthday = Birthday;
    this.Sex =Sex;
    this.TelNumber = TelNumber;
    this.Email = Email;
    this.Password = Password;
    }
}

export async function findUser(Login) {
    try{
        let pool = await mssql.connect(config);
        let user = await pool.request()
        .input('Login',mssql.VarChar(50),Login)
        .query('select Count(*) from Users where User_Login = @Login');
        return user.recordset[0][''] > 0
    }
    catch(e){
        console.log(e);
    }
}

export async function getUserData(Login){
    try{
        let pool = await mssql.connect(config);
        let user = await pool.request()
        .input('Login',mssql.VarChar(50),Login)
        .query('select * from Users where User_Login = @Login');
        return user.recordset[0]
    }
    catch(e){
        console.log(e);
    }
}

export async function findPassword(login,password) {
    try{
        let pool = await mssql.connect(config);
        let checkPass = await pool.request()
        .input('Login',mssql.VarChar(50),login)
        .input('Password',mssql.VarChar(20),password)
        .query('SELECT Count(*) from Login_Pass where Login = @Login and Password = @Password');
        return checkPass.recordsets[0][0]['']>0;
    }
    catch(e){
        console.log(e);
    }
}

export async function addUser(User) {
    try{
        let pool = await mssql.connect(config);
        let insertuser = await pool.request()
        .input('Login',mssql.VarChar(50),User.Login)
        .input('Full_Name',mssql.VarChar(50),User.Full_Name)
        .input('Birthday',mssql.VarChar(50),User.Birthday)
        .input('Sex',mssql.VarChar(50),User.Sex)
        .input('Number',mssql.Numeric(18,0),User.TelNumber)
        .input('Email',mssql.VarChar(50),User.Email)
        .input('Password',mssql.VarChar(50),User.Password)
        .execute('InsertUser');
        return insertuser.recordsets;
    }
    catch(e){
        console.log(e);
    }
}

export async function getUserOrders(Login) {
    try{
        let pool = await mssql.connect(config);
        let user = await pool.request()
        .input('Login',mssql.VarChar(50),Login)
        .query('select Order_ID from Orders where User_Login = @Login');
        return user.recordset[0]
    }
    catch(e){
        console.log(e);
    }
}   
