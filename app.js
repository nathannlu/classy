const express = require('express');
const app = express();
const bayes = require('classificator');
const classifier = bayes();

classifier.learn('computer, laptop, phone, tablet, printer, scanners', 'tech');

app.get('/:tags', (req, res) => {
  const tags = req.params.tags;
  console.log(tags);
  //const input = 'notebook,laptop,computer,portable computer,scanner,technology';
  const categorizedTags = classifier.categorize(tags);
  res.json(categorizedTags);
})

app.listen(process.env.PORT || 9000, () => {
  console.log('server started');
}) 