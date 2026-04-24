const { Resend } = require('resend');
const fs = require('fs');

const resend = new Resend(process.env.RESEND_API_KEY);

function getDefaultNews() {
  return [
    { title: '默认新闻1', url: '#', published: '2026-01-01', highlights: '测试' },
    { title: '默认新闻2', url: '#', published: '2026-01-01', highlights: '测试' }
  ];
}

let news = [];
try {
  const newsData = fs.readFileSync('news.json', 'utf8');
  news = JSON.parse(newsData);
} catch (e) {
  console.log('未找到news.json，使用默认数据');
  news = getDefaultNews();
}

function generateEmail(newsItems) {
  const date = new Date().toLocaleDateString('zh-CN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let newsHTML = '';
  newsItems.forEach((item, index) => {
    newsHTML +=
