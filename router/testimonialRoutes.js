const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();

let testimonials=[
    { 
        id: 1,
        img:"https://i.postimg.cc/ZKH8pwZ4/alex.jpg",
        title: "Alex Sexwale", 
        desc: " Lindokuhle Nkamela is dedicated like tackling all challenges presented to him, He has a bright future ahead of him "
    },

    { 
        id: 2,
        img:"https://i.postimg.cc/d1Rkv0Vw/lilita.jpg",
        title: "Lilita Ngele", 
        desc: "hmmm.. well Lindokuhle is a helpful guy and extremely gentle and understanding.always willing to learn"
    },
    {   id: 3,
        img:"https://i.postimg.cc/7hfk9Bcd/unathi.jpg",
        title: "Unathi Qolweni", 
        desc: "indokuhle  pays attention to improve the esthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again."
     },
     { 
        id: 4,
        img:"https://i.postimg.cc/MTHNJnDj/Sindi.jpg",
        title: "Sindile Makhathini", 
        desc: "I met Lindokuhle at the Academy and i have observed that he is a quiet and hardworking individual.He is a goal-orientated person who strives to be the best that he can be"
     },
    ];

// GET ALL PROJECTS
app.get('/', (req, res)=>{
 res.send(testimonials);        // getting the projects from the 
});

app.get("/:id", (req, res)=>{
const testimonial = testimonial.find((testimonial) =>testimonial.id == req.params.id);
if(!testimonial) res.status(404).send({msg:"Testimonials not found"});
res.send(testimonial);
});

// CREATE  A PROJECT (push to array)
app.post("/", (req, res)=>{
 let {img,title, desc} = req.body;
 if( !img || !title || !desc )
 res.status(400).send({msg: "Not all information sent"});
 let newTestimonial ={
     id: testimonials.length +1,
     img,
     title,
     desc,
 };
 testimonials.push(newTestimonial);
 res.send(newProject);
});

//UPDATE Testimonials (update item in array)
app.put("/:id", (req, res)=>{
    //find testimonial index in testimonial
    let testimonial = testimonials.find((testimonial)=> testimonial.id == req.params.id);
    // if no testimonial find send error
    if(!testimonial) res.status(404).send({msg:"Testimonials not found"});
    //send data from request body
    let {img,title, desc} =req.body;

    if(img) testimonial.img = img;
    if(title) testimonial.title= title;
    if(desc) testimonial.desc= desc;

});

// DELETE A PROJECT( remove from array)
app.delete("/:id", (req, res)=>{
    testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonials);
    res.send({msg: "Item removed"});

});
module.exports = app;

