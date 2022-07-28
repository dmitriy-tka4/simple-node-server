import http from 'http';

const port = 3003;

const server = http.createServer((req, res) => {
  const user = {
    name: 'Dmitriy',
    isAdmin: true
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

server.listen(port);
