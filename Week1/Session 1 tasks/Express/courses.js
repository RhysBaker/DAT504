const express = require('express');
const app = express();
const courses = [
  { id: 1, name: 'courses1' },
  { id: 1, name: 'courses1' }
  { id: 1, name: 'courses1' }
];


app.get('/api/courses', (req, res) =>{
  res.send(courses);
});

app.get('/api/courses:id', (req, res) =>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID was');
  res.send(courses);
});

app.listen(3000, () => console.log('listening on port 3000'));
