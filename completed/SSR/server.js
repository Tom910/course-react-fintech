const express = require('express');
const React = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const App = require('./containers/App').default;
const store = require("./store/store").default;
const {
  MemoryRouter,
} = require('react-router');

const app = express();

app.get('/', (req, res) => {
  const appString = renderToString(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);

  res.send(`
       <!DOCTYPE html>
       <html>
           <head>
           </head>
           <body>
               <div id="root">${appString}</div>
               <script type="text/javascript" src="http://localhost:3000/static/js/bundle.js"></script>
           </body>
       </html>
   `);
});

app.listen(3001, () => {
  console.log('Server start')
});
