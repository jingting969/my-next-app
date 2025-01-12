import React from 'react';
import Link from 'next/link'; // 导入 Link 组件

const Page = () => {
  const articles = [
    { id: 1, title: '第一篇文章', content: '这是第一篇文章的内容。' },
    { id: 2, title: '第二篇文章', content: '这是第二篇文章的内容。' },
    { id: 3, title: '第三篇文章', content: '这是第三篇文章的内容。' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">文章列表</h1>
      <ul className="grid grid-cols-1 gap-6">
        {articles.map(article => (
          <li key={article.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">
              <Link href={`/pages/${article.id}`} className="text-blue-600 hover:underline">{article.title}</Link>
            </h2>
            <p className="text-gray-700">{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;