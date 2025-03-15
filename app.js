const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('조치호 도메인 테스트 입니다');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
