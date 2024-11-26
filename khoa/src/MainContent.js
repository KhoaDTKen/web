import React from 'react';
import './MainContent.css';

function MainContent() {
  const article = {
    title: 'Uchiha Sasuke',
    image: 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/7/6/photo-1-15940093634781712523938.png', // URL hình ảnh mẫu
    content: `Với Rinnegan, nó đã nâng tầm Sasuke trở thành 1 trong những người sử dụng ảo thuật mạnh nhất mọi thời đại. Chỉ trong tức khắc, anh có thể khống chế cả 9 Vỹ thú chỉ trong vài giây và nhốt chúng bằng Chibaku Tensei.`,
    author: 'Lê Đăng Khoa',
    date: 'October 8, 2024',
  };

  return (
    <main className="main-content">
      <div className="article">
        <h1>{article.title}</h1>
        <img src={article.image} alt="Uchiha Sasuke" />
        <p className="content">{article.content}</p>
        <div className="article-meta">
          <p>Written by: {article.author}</p>
          <p>Date: {article.date}</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
