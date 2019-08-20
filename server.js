const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');
const baseURL = 'https://elections.huffingtonpost.com/pollster/api/v2/'

app.use(express.static('public'));

app.set('view engine', 'pug');
app.get('/:cursor?', (req, res) => {
  let data = {};
  if(!!req.params.cursor) {
    data = { cursor: req.params.cursor };
    console.log('yeah');
  }
  axios.get(baseURL + 'polls', data)
  .then(response => {
    res.render('index', {
      title: 'Polls',
      items: response.data.items,
      nextPage: response.data.next_cursor
    });
  })
  .catch(error => {
    console.log(error);
    res.write('error');
    res.end();
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
