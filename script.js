const topicPool = [
  {
    title: '净化社区环境我们是认真的',
    excerpt: '围绕社区治理与氛围建设，讨论如何让高质量内容持续增长。',
    category: '运营反馈',
    tags: ['公告', '治理'],
    replies: 912,
    views: '14.8k',
    active: '刚刚',
  },
  {
    title: '国内就没有能对标 Claude Code 的方案吗？',
    excerpt: '聚焦 AI 编程工具与工作流配置，适合开发者参与讨论。',
    category: '开发调优',
    tags: ['AI', 'OpenAI'],
    replies: 15,
    views: '133',
    active: '12 分钟前',
  },
  {
    title: '再抽 EDU 教育邮箱 5 个',
    excerpt: '福利活动类型内容高互动、传播快，是社区增长的重要抓手。',
    category: '福利羊毛',
    tags: ['抽奖', '福利'],
    replies: 987,
    views: '1.6k',
    active: '28 分钟前',
  },
  {
    title: '最近学习 n8n 的疑惑',
    excerpt: '工作流自动化、AI agent 与 API 编排等内容适合形成问答沉淀。',
    category: '开发调优',
    tags: ['自动化', '快问快答'],
    replies: 34,
    views: '376',
    active: '43 分钟前',
  },
  {
    title: '第一次用 macOS 系统入门',
    excerpt: '偏新手向的经验分享内容，可以帮助社区承接更广泛用户群。',
    category: '资源荟萃',
    tags: ['教程', '入门'],
    replies: 32,
    views: '361',
    active: '1 小时前',
  },
  {
    title: '今天 30 岁了，感恩社区与佬友',
    excerpt: '保留生活化讨论，往往能让技术社区建立更深的用户关系。',
    category: '搞七捻三',
    tags: ['树洞', '生活'],
    replies: 73,
    views: '310',
    active: '2 小时前',
  },
];

const topicRows = document.querySelector('#topicRows');
const shuffleButton = document.querySelector('#shuffleTopics');

function renderTopics(items) {
  topicRows.innerHTML = items
    .map(
      (item) => `
        <article class="topic-row">
          <div class="topic-title">
            <strong>${item.title}</strong>
            <p>${item.excerpt}</p>
            <div class="topic-meta">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
          </div>
          <span>${item.category}</span>
          <span>${item.replies}</span>
          <span>${item.views}</span>
          <time>${item.active}</time>
        </article>
      `,
    )
    .join('');
}

function shuffleTopics() {
  const shuffled = [...topicPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  renderTopics(shuffled);
}

shuffleButton.addEventListener('click', shuffleTopics);
renderTopics(topicPool.slice(0, 5));
