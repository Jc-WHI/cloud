const express = require('express');
const app = express();
const port = 3000; // 포트 번호 변경

app.use(express.static('public')); // 정적 파일 제공

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
});

app.get('/sorting', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>정렬 알고리즘</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>정렬 알고리즘</h1>
      <p>정렬 알고리즘은 데이터를 특정 순서로 정렬하는 알고리즘입니다.</p>
      <h2>주요 정렬 알고리즘</h2>
      <ul>
        <li>버블 정렬</li>
        <li>삽입 정렬</li>
        <li>선택 정렬</li>
        <li>퀵 정렬</li>
        <li>병합 정렬</li>
      </ul>
      <a href="/">홈으로</a>
    </body>
    </html>
  `);
});

app.get('/searching', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>검색 알고리즘</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>검색 알고리즘</h1>
        <p>검색 알고리즘은 데이터에서 특정 값을 찾는 알고리즘입니다.</p>
        <h2>주요 검색 알고리즘</h2>
        <ul>
          <li>선형 검색</li>
          <li>이진 검색</li>
        </ul>
        <a href="/">홈으로</a>
      </body>
      </html>
    `);
});

app.get('/graph', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>그래프 알고리즘</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>그래프 알고리즘</h1>
        <p>그래프 알고리즘은 그래프 데이터를 처리하는 알고리즘입니다.</p>
        <h2>주요 그래프 알고리즘</h2>
        <ul>
          <li>DFS (깊이 우선 탐색)</li>
          <li>BFS (너비 우선 탐색)</li>
          <li>다익스트라 알고리즘</li>
          <li>플로이드-워셜 알고리즘</li>
        </ul>
        <a href="/">홈으로</a>
      </body>
      </html>
    `);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
