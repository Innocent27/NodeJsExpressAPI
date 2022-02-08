const express = require('express');
const app = express();
const projectRoutes = require("./router/projectRoutes")  //setting the routes
const testimonialRoutes = require("./router/testimonialRoutes")
app.get('/', (req, res)=>{
    res.send({msg:"welcome to Lindo backend portfolio"});
});
app.use("/projects", projectRoutes);
app.use("/testimonials", testimonialRoutes);
app.listen(6000);