const express=require("express");
const router=express.Router();
const authorModel=require('../models/model');

// router.post("/users", async(req,res)=>{
//     const data=[
//         {
//             name:"Ashanur Hossain",
//             email:"nur@gmail.com",
//             phone:3245894520,
//             city:"Kolkata",
//             zipcode:123456
//         },
//         {
//             name:"Tapaswee Samantaray",
//             email:"tappu@gmail.com",
//             phone:1245894520,
//             city:"Bhubaneswar",
//             zipcode:223456
//         },
//         {
//             name:"Sagar Maan",
//             email:"smaan@gmail.com",
//             phone:1045894520,
//             city:"Noida",
//             zipcode:323456
//         },
//         {
//             name:"Soumya Pradhan",
//             email:"spradhan@gmail.com",
//             phone:2020322596,
//             city:"Ranchi",
//             zipcode:123695
//         },
//         {
//             name:"Kumaresh Sarkar",
//             email:"sarkark@gmail.com",
//             phone:2000894520,
//             city:"Dispur",
//             zipcode:123356
//         },
//         {
//             name:"Bharat Agarwal",
//             email:"bharat@gmail.com",
//             phone:7455894520,
//             city:"Gandhinagar",
//             zipcode:323456
//         },
//         {
//             name:"Muktaj Parbhin",
//             email:"mparvin@gmail.com",
//             phone:1212194520,
//             city:"Chennai",
//             zipcode:383456
//         },
//         {
//             name:"Pritesh Gopal",
//             email:"pritesh@gmail.com",
//             phone:1212362541,
//             city:"Bengalore",
//             zipcode:526341
//         },
//         {
//             name:"Virat Kohli",
//             email:"viru@gmail.com",
//             phone:2345894520,
//             city:"Delhi",
//             zipcode:696456
//         },
//         {
//             name:"MS Dhoni",
//             email:"dhoni@gmail.com",
//             phone:2563894520,
//             city:"Ranchi",
//             zipcode:333456
//         },
//         {
//             name:"Prabal Deb",
//             email:"deb@gmail.com",
//             phone:3696894520,
//             city:"Hyderabad",
//             zipcode:123400
//         },
//         {
//             name:"Priya Mourya",
//             email:"priya@gmail.com",
//             phone:3045894252,
//             city:"Chandigarh",
//             zipcode:123451
//         },
//         {
//             name:"Nirmala Gupta",
//             email:"nirmala@gmail.com",
//             phone:4445894520,
//             city:"Bhupal",
//             zipcode:128456
//         },
//         {
//             name:"Jahidul Islam",
//             email:"jislam@gmail.com",
//             phone:3215894520,
//             city:"Mumbai",
//             zipcode:123433
//         },
//         {
//             name:"Kedar Deb",
//             email:"kdeb@gmail.com",
//             phone:2645894520,
//             city:"Shimla",
//             zipcode:923456
//         },
//     ]
//     await authorModel.create(data);
//     return res.status(201).send({msg:"Success"})
// });
router.get("/users", async (req,res)=>{
    try{
        const users=await authorModel.find().select({__v:0,_id:0});
        return res.status(200).send({data:users})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
});


module.exports=router;