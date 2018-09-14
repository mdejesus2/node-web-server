const express = require('express');
const hbs = require('hbs');

let port = process.env.PORT || 3000;

let app = express();

app.set('view engine', 'hbs');


// app.use((req, res, next)=>{
//     res.render('maintenance.hbs');
//     next();
// });

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('userActive' , () => {
    return 'Michael De Jesus';
});


app.get('/', (req, res) => {
    res.render('home.hbs', {
        titlePage: 'Home'
    }); 
});

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        titlePage: 'About Page'
    });
});
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(port, () => {
    console.log(`server is up in port ${port}!!!`);
});