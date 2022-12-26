import config from './config.js';
import mssql from 'mssql';

class Order{
    constructor(OrderId,Date,Time,DishID,Quantity,PromoID,Payment,Receipt,UserLogin){
        this.OrderId = OrderId;
        this.Date = Date;
        this.Time = Time;
        this.DishID = DishID;
        this.Quantity = Quantity;
        this.PromoID = PromoID;
        this.Payment = Payment;
        this.Receipt = Receipt;
        this.UserLogin = UserLogin;
    }
}

export async function addOrder(Order){
    try{
        let pool = await mssql.connect(config);
        let addOrder = await pool.request()
        .input('OrderId',mssql.Int,Order.OrderId)
        .input('Date',mssql.Date,Order.Date)
        .input('Time',mssql.NVarChar(8),Order.Time)
        .input('DishID',mssql.Int,Order.DishID)
        .input('Quantity',mssql.Int,Order.Quantity)
        .input('PromoID',mssql.NVarChar(10),Order.PromoID)
        .input('Payment',mssql.NVarChar(50),Order.Payment)
        .input('Receipt',mssql.NVarChar(50),Order.Receipt)
        .input('UserLogin',mssql.NVarChar(50),Order.UserLogin)
        .execute('addOrder',);
        return addOrder.recordsets;
    }
    catch(e){
    console.log(e);
    }
}

export async function updateOrder(Dish){
    try{
        let pool = await mssql.connect(config);
        let updateOrder = await pool.request()
        .input('DishID',mssql.Int,Dish.DishID)
        .input('Dish_Name',mssql.NVarChar(50),Dish.Dish_Name)
        .input('Description',mssql.NVarChar(200),Dish.Descripton)
        .input('Composition',mssql.NVarChar(200),Dish.Composition)
        .input('Callories',mssql.Int,Dish.Callories)
        .input('Weight',mssql.Decimal(5,3),Dish.Weight)
        .input('Dish_cost',mssql.Money,Dish.Dish_cost)
        .query('Update Dish set Dish_Name=@Dish_Name, Description = @Description, Composition = @Composition, Callories = @Callories, Weight = @Weight, [Dish Cost] = @Dish_cost where Dish_ID = @DishID')
        return updateOrder.recordsets
    }
    catch(e){
        console.log(e);
    }
}

export async function getOrders(){
    try{
        let pool = await mssql.connect(config);
        let getDishes = await pool.request()
        .query('select * from dishes')
        return getDishes.recordsets
    }
    catch(e){
        console.log(e);
    }
}