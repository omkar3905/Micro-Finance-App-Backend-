const bodyParser = require('body-parser');
const express=require('express');

const app=express();
app.use(bodyParser.json());

const admin=require('./routes/adminroutes');
const manager=require('./routes/managerroutes');
const salesexecutive=require('./routes/salesroutes');
const user=require('./routes/userroutes');
const documents=require('./routes/documentroutes');
const payment=require('./routes/paymentroutes');
const loan=require('./routes/loanroutes');
const auth=require('./routes/authenticationroutes');

app.use("/api/v1",admin);
app.use("/api/v2",manager);
app.use("/api/v3",salesexecutive);
app.use("/api/v4",user);
app.use("/api/v5",documents);
app.use("/api/v6",payment);
app.use("/api/v7",loan);
app.use("/api/v8",auth);

module.exports=app
