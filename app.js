const path = require('path');
const express = require('express');
const request = require('request');
const { query } = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/result', (req, res) => {
    let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=8142a9fb267b0193124df1db0d5cee7e&query='+query, (error, response, body) => {
        if(error){
            console.log(error);
        }
        let data = JSON.parse(body);
        res.render('movies', {data: data, searchQuery: query});
    })

    
});

app.get('/search', (req, res)=> {
   res.render('search');
});


app.listen(3000, ()=> {
    console.log('Server is on:3000')
});


