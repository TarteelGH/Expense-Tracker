import "reflect-metadata"
<<<<<<< HEAD
// import 'dotenv/config.js'
import express from 'express';
import db from './db/dataSource'
import dotenv from 'dotenv'
=======
import "./config.js"
import express from 'express';
import db from './db/dataSource'
import dotenv from 'dotenv'
import createError from 'http-errors'

>>>>>>> dev
import expenseRouter from './routers/expenses'
import catgoryRouter from './routers/categories'
import currencyRouter from './routers/currencies'
import accountRounter from './routers/account'
<<<<<<< HEAD
import businessRouter from './routers/buisiness_account'
import personalRouter from './routers/personal_account'
=======

import dataSource from "./db/dataSource";
>>>>>>> dev

// import { Db } from "typeorm";

// import { Index } from "typeorm";


const app = express() ; 
<<<<<<< HEAD
const PORT = 3000 ; 

app.use(express.json());
=======
dotenv.config();
const PORT = process.env.PORT || 3000;
// const PORT = 3000 ; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
>>>>>>> dev

app.use('/expense-tracker/expenses',expenseRouter)
app.use('/expense-tracker/categories', catgoryRouter)
app.use('/expense-tracker/currencies', currencyRouter )
app.use('/expense-tracker/accounts', accountRounter)
<<<<<<< HEAD
app.use('/expense-tracker/business-accounts', businessRouter)
app.use('/expense-tracker/personal-accounts', personalRouter)




 

app.listen(PORT,() =>{
console.log(`app is running and listening on port ${PORT}`);
=======


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });

// using Redis ;

  // error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500).send({ error: err.message });
  });
  

app.listen(PORT,() =>{
console.log(`App is running and listening on port ${PORT} and host http://localhost:${PORT}`);
>>>>>>> dev
db.initialize();
})
 


export default app;