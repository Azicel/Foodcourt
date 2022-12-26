import config from './Config.js';
import mssql from 'mssql';

class Dish{
    constructor(Dish_ID,Dish_Name,Description,Composition,Callories,Weight,Dish_cost,Restraunt_ID){
        this.Dish_ID = Dish_ID;
        this.Dish_Name = Dish_Name;
        this.Description = Description;
        this.Composition = Composition;
        this.Callories = Callories;
        this.Weight = Weight;
        this.Dish_cost = Dish_cost;
        this.Restraunt_ID = Restraunt_ID;
    }
}

export async function addDish(Dish) {
    try{
        let pool = await mssql.connect(config);
        let insertDish = await pool.request()
        .input('DishID',mssql.Int,Dish.DishID)
        .input('Dish_Name',mssql.NVarChar(50),Dish.Dish_Name)
        .input('Descripton',mssql.NVarChar(200),Dish.Descripton)
        .input('Composition',mssql.NVarChar(200),Dish.Composition)
        .input('Callories',mssql.Int,Dish.Callories)
        .input('Weight',mssql.Decimal(5,3),Dish.Weight)
        .input('Dish_cost',mssql.Money,Dish.Dish_cost)
        .input('RestrauntID',mssql.Int,Dish.RestrauntID)
        .execute('InsertDish',);
        return insertDish.recordsets;
    }
    catch(e){
    console.log(e);
    }
}

export async function updateDish(Dish){
    try{
        let pool = await mssql.connect(config);
        let updateDish = await pool.request()
        .input('DishID',mssql.Int,Dish.DishID)
        .input('Dish_Name',mssql.NVarChar(50),Dish.Dish_Name)
        .input('Description',mssql.NVarChar(200),Dish.Descripton)
        .input('Composition',mssql.NVarChar(200),Dish.Composition)
        .input('Callories',mssql.Int,Dish.Callories)
        .input('Weight',mssql.Decimal(5,3),Dish.Weight)
        .input('Dish_cost',mssql.Money,Dish.Dish_cost)
        .query('Update Dish set Dish_Name=@Dish_Name, Description = @Description, Composition = @Composition, Callories = @Callories, Weight = @Weight, [Dish Cost] = @Dish_cost where Dish_ID = @DishID')
        return updateDish.recordsets
    }
    catch(e){
        console.log(e);
    }
}

export async function getDishes(Restaurant_ID){
    try{
        let pool = await mssql.connect(config);
        let getDishes = await pool.request()
        .input('Restaurant_ID',mssql.Int,Restaurant_ID)
        .query('select * from Dish where Restaurant_ID = @Restaurant_ID')
        return getDishes.recordset
    }
    catch(e){
        console.log(e);
    }
}

export async function getDishDescription(Restaurant_ID,Dish_ID){
    try{
        let pool = await mssql.connect(config);
        let dish = await pool.request()
        .input('Restaurant_ID',mssql.Int,Restaurant_ID)
        .input('Dish_ID',mssql.Int,Dish_ID)
        .query('select Description from Dish where Restaurant_ID = @Restaurant_ID and Dish_ID = @Dish_ID');
        return dish.recordset[0]
    }
    catch(e){
        console.log(e);
    }
}