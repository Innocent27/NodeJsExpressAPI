const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();

let projects=[
    { 
        id: 1,
        title: "Point On Sale", 
        desc: "Online POS",
        stack: "Javascript",
        img:"",
        img_alt: "",
        github:"https://github.com/Innocent27/PointOnSale_FinalProject.git",
        live:"https://pointonsalefinal.netlify.app/"
    },

    { 
        id: 2,
        title: "Reaction timer", 
        desc: "Vue Js based project",
        stack: "Vue Js",
        img: "",
        img_alt:"",
        github:"",
        live:""
    },
    {   id: 3,
        title: "Calculator", 
        desc: "basic calculator",
        stack: "Javascript",
        img: "",
        img_alt:"",
        github:"",
        live:""
     },
    ];

// GET ALL PROJECTS
app.get('/', (req, res)=>{
 res.send(projects);        // getting the projects from the 
});

app.get("/:id", (req, res)=>{
const project = projects.find((project) =>project.id == req.params.id);
if(!project) res.status(404).send({msg:"Projects not found"});
res.send(project);
});

// CREATE  A PROJECT (push to array)
app.post("/", (req, res)=>{
 let {title, desc, stack, img, img_alt, github, live} = req.body;
 if(!title || !desc || !stack || !img ||!img_alt || !github ||!live)
 res.status(400).send({msg: "Not all information sent"});
 let newProject ={
     id: projects.length +1,
     title,
     desc,
     stack,
     img,
     img_alt,
     github,
     live,
 };
 projects.push(newProject);
 res.send(newProject);
});

//UPDATE A PROJECT (update item in array)
app.put("/:id", (req, res)=>{
    //find project index in projects
    let project = projects.find((project)=> project.id == req.params.id);
    // if no project find send error
    if(!project) res.status(404).send({msg:"Project not found"});
    //send data from request body
    let {title, desc, stack, img, img_alt, github, live} =req.body;

    if(title) project.title= title;
    if(desc) project.desc= desc;
    if(stack) project.stack = stack;
    if(img) project.img = img;
    if(img_alt) project.img_alt = img_alt;
    if(github) project.github = github;
    if(live) project.live = live;

});

// DELETE A PROJECT( remove from array)
app.delete("/:id", (req, res)=>{
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({msg: "Item removed"});

});
module.exports = app;