// 创建一个简单的博客页面
document.addEventListener('DOMContentLoaded', function() {
    // 创建页面结构
    const app = document.getElementById('app');

    // 标题
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = '我的博客';
    header.appendChild(title);
    app.appendChild(header);

    // 博客文章
    const posts = [
        {
            title: '第一篇文章',
            date: '2024-12-01',
            content: '这是我的第一篇博客文章。'
        },
        {
            title: '第二篇文章',
            date: '2024-12-05',
            content: '这是我的第二篇博客文章。'
        }
    ];

    const main = document.createElement('main');

    posts.forEach(post => {
        const article = document.createElement('article');

        const postTitle = document.createElement('h2');
        postTitle.innerText = post.title;
        article.appendChild(postTitle);

        const postDate = document.createElement('p');
        postDate.className = 'date';
        postDate.innerText = post.date;
        article.appendChild(postDate);

        const postContent = document.createElement('p');
        postContent.innerText = post.content;
        article.appendChild(postContent);

        main.appendChild(article);
    });

    app.appendChild(main);

    // 页脚
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.innerText = '© 2024 我的博客';
    footer.appendChild(footerText);
    app.appendChild(footer);
});
