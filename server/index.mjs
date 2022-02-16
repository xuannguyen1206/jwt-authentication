import sequelize from "./connection.mjs";
import {User,Job} from './table.mjs'
import express from "express";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { Op } from "sequelize";

//await User.drop();
const app = express();


app.use(express.urlencoded());  
app.use(cors());
app.use(express.json());

User.hasMany(Job);
Job.belongsTo(User);
// await sequelize.sync({force:true}); /* always  put this after class methods */

app.post('/api/signup',async function (req,res){
  console.log(req.body)
  const user = await User.create({username: req.body.username, password: req.body.password})
  req.body.job1 ? await user.createJob({job: req.body.job1}) : ''; 
  req.body.job2 ? await user.createJob({job: req.body.job2}) : '';
  //console.log(user.dataValues)

  const payload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
    password: user.dataValues.password,
  }
  const token = jwt.sign(payload,'secretKey');
  res.json({
    token
  })
});

app.post('/api/login',async function (req,res){
  const foundUser = await User.findOne({
    where:{
      [Op.and]: [
        { username: req.body.username},
        { password: req.body.password}
      ]
    }
  });
  if(foundUser === null){
    console.log('no');
    res.sendStatus(401)
  } else {
    const payload = {
      id: foundUser.dataValues.id,
      username: foundUser.dataValues.username,
      password: foundUser.dataValues.password,
    }
    const token = jwt.sign(payload,'secretKey');
    res.json({
      token
    })
  }
})

app.get('/api/username', async (req,res) => {
  let userData = jwt.verify(req.headers.authorization,'secretKey');
  console.log(userData);
  const foundUser = await User.findOne({
    where:{
      [Op.and]: [
        { username: userData.username },
        { password: userData.password }
      ]
    }
  });
  const foundJobs = await Job.findAll({
    where:{
      UsernameId: foundUser.dataValues.id
    }
  });
  const jobs =[]
  if(foundJobs.length !== 0){
    foundJobs.map(job=>{
      jobs.push(job.dataValues.job);
    })
  }
  res.send({
    username: foundUser.dataValues.username,
    jobs: jobs, 
  })
  console.log(foundUser);
  console.log(foundJobs);
})

app.get('/api/test',  function (req,res){
  let payload = jwt.verify(req.headers.authorization,'secretKey')
  console.log(payload);
})



app.listen(4000)