const express = require('express');
const path = require('path'); // path 모듈 추가
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'frontend/build')));

<<<<<<< HEAD
app.get('/', (req, res) => { // 매개변수 순서 수정
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
=======
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>홈페이지 소개 </title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>알고리즘 소개</h1>
      <p>조치호의  알고리즘 소개 홈페이지에 오신 것을 환영합니다.</p>
      <h2>주요 알고리즘</h2>
      <ul>
        <li><a href="/sorting">정렬 알고리즘</a></li>
        <li><a href="/searching">검색 알고리즘</a></li>
        <li><a href="/graph">그래프 알고리즘</a></li>
      </ul>
      <p>본 사이트는 GCP, nginx , express.js를 통해 만들어졌습니다.</p>
<p>현재git을 통한 개발환경 구축중이고, react를 사용해 깔끔한 사이트를 만들 예정입니다. </p>
    </body>
    </html>
  `);
>>>>>>> 9dc1b4730bb3f38e13d0b2ce6752a5cc7ee71c64
});

// 다른 라우트 정의 (예: API 라우트)

// 와일드카드 라우트는 마지막에 정의
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});