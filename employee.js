import config from './Config.js';
import mssql from 'mssql';

class Employee{
    constructor(Employee_Login,Full_Name,OrganisationID,RestrauntID){
    this.Employee_Login = Employee_Login;
    this.Full_Name = Full_Name;
    this.OrganisationID = OrganisationID;
    this.RestrauntID = RestrauntID;
    }
}

async function findEmployee(Employee_Login){
    try{
        const pool = await mssql.connect(config);
        const Employee = await pool.request()
        .input('Employee_Login',mssql.NVarChar(50),Employee_Login)
        .query('Select Count(*) from Employee where Employee_Login = @Employee_Login')
        return Employee.recordsets[0][0][''] > 0;
    }
    catch(e){
        return false;
    }
}

async function addEmployee(Employee) {
    try{
        let pool = await mssql.connect(config);
        let insertEmployee = await pool.request()
        .input('Login',mssql.NVarChar(50),Employee.Login)
        .input('Full_Name',mssql.NVarChar(50),Employee.Full_Name)
        .input('OrganisationID',mssql.VarChar(50),Employee.OrganisationID)
        .input('RestrauntID',mssql.Int,Employee.RestrauntID)
        .input('Password',mssql.NVarChar(50),Employee.Password)
        .execute('InsertEmployee',);
        return insertEmployee.recordsets;
    }
    catch(e){
    console.log(e);
    }
}

export {findEmployee,addEmployee};