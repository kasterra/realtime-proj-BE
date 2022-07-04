import express from 'express';

const app = express();

console.log('hello');

app.listen(8080, () => console.log(`Listening on http://localhost:${8080}`));
