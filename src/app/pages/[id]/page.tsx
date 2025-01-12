import React from 'react';
import { notFound } from 'next/navigation';

// 定义页面参数的类型
type Props = {
  params: {
    id: string;
  };
};

const ArticleDetail = ({ params }: Props) => {
  // 模拟文章数据
  const articles = [
    { id: '1', title: '第一篇文章', content: '这是第一篇文章的详细内容。' },
    { id: '2', title: '第二篇文章', content: '这是第二篇文章的详细内容。' },
    { id: '3', title: '第三篇文章', content: '这是第三篇文章的详细内容。' },
  ];

  // 根据 ID 查找文章
  const article = articles.find(article => article.id === params.id);

  // 如果文章不存在，返回 404
  if (!article) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <div className="prose">
        <p>{article.content}</p>
      </div>
      <div className="mt-4">
        <a href="/pages" className="text-blue-500 hover:underline">
          返回文章列表
        </a>
      </div>
    </div>
  );
};

export default ArticleDetail;
