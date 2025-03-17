const express = require('express');
const path = require('path'); // path 모듈 추가
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/', (req, res) => { // 매개변수 순서 수정
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

// 다른 라우트 정의 (예: API 라우트)

// 와일드카드 라우트는 마지막에 정의
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});