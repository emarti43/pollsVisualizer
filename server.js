const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');
const baseURL = 'https://elections.huffingtonpost.com/pollster/api/v2/'

app.use(express.static('public'));

app.set('view engine', 'pug');

function chunkArray(array, chunkSize) {
  if(array.length == 0) {
    return [];
  }else {
    return [array.slice(0, chunkSize)].concat(chunkArray(array.slice(chunkSize, array.length), chunkSize));
  }
}

app.get('/:cursor?', (req, res) => {
  let cursor = '';
  if(!!req.params.cursor) {
    cursor = req.params.cursor;
  }
  axios.get(baseURL + `polls?cursor=${cursor}`)
  .then(response => {
    response.data.items
    res.render('index', {
      title: 'Polls',
      items: chunkArray(response.data.items, response.data.items.length / 4),
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
