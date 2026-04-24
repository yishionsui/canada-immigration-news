const fs = require('fs');

function getDefaultNews() {
  return [
    {
      title: 'Co-op工作许可豁免政策生效（2026年4月1日起）',
      url: 'https://www.canada.ca',
      published: '2026-04-09',
      highlights: 'Post-secondary国际学生不再需要单独的Co-op工作许可'
    },
    {
      title: 'IRCC简化学习许可pathways',
      url: 'https://canadaimmigration.news',
      published: '2026-04-11',
      highlights: '提出监管修正案，减少行政步骤'
    },
    {
      title: '博士处理速度提升',
      url: 'https://www.visavio.ca',
      published: '2026-01-31',
      highlights: '博士学位持有人的学习许可处理时间缩短至2周'
    },
    {
      title: '财务要求提高',
      url: 'https://www.visavio.ca',
      published: '2026-01-31',
      highlights: '申请需证明可支配资金22,895加元'
    },
    {
      title: '校内工作定义扩大',
      url: 'https://immigration2canada.com',
      published: '2026-04-17',
      highlights: 'Co-op实习纳入校内工作范围'
    },
    {
      title: '配偶开放工签政策继续',
      url: 'https://www.canada.ca',
      published: '2026-01-01',
      highlights: '学习许可持有人配偶可申请开放工签'
    },
    {
      title: '省证明信要求调整',
      url: 'https://canadaimmigration.news',
      published: '2026-01-01',
      highlights: '硕士博士无需省级证明信PAL'
    },
    {
      title: '每周工作24小时限制',
      url: 'https://www.visavio.ca',
      published: '2026-01-01',
      highlights: '每周工作时长限制24小时严格执行'
    },
    {
      title: '毕业工签PGWP新政策',
      url: 'https://canadaimmigration.news',
      published: '2026-02-01',
      highlights: '毕业工签申请流程简化'
    },
    {
      title: '移民配额增加',
      url: 'https://www.canada.ca',
      published: '2026-02-01',
      highlights: '2026年移民配额继续增加'
    }
  ];
}

console.log('正在生成10条新闻数据...');
const news = getDefaultNews();
fs.writeFileSync('news.json', JSON.stringify(news, null, 2));
console.log('✅ 10条新闻已保存到 news.json');
