const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');
const baseURL = 'https://elections.huffingtonpost.com/pollster/api/v2/'

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  var polls = []
  axios.get(baseURL + 'polls')
  .then(response => {
    res.render('index', {
      title: 'Polls',
      items: response.data.items
    });
  }).catch(error => {
    console.log(error);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
