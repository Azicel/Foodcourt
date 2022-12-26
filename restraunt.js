import config from './Config.js';
import mssql from 'mssql';

class Restaurant{
    constructor(Restaurant_ID,Restaurant_Name,Avg_price,Restaurant_discription){
    this.Restaurant_ID =Restaurant_ID
    this.Restaurant_Name =Restaurant_Name
    this.Avg_price =Avg_price
    this.Restaurant_discription = Restaurant_discription
    }
}

export async function getRestDescription(Restaurant_ID){
    try{
        let pool = await mssql.connect(config);
        let restaurant = await pool.request()
        .input('Restaurant_ID',mssql.Int,Restaurant_ID)
        .query('select Restaurant_description from Restaurant where Restaurant_ID = @Restaurant_ID');
        return restaurant.recordset[0]
    }
    catch(e){
        console.log(e);
    }
}