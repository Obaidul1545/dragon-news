import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/AsideLayout/RightAside';
import NewsDetailCard from '../components/NewsDetailCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetailPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((news) => news.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto px-2 my-8 grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <h1 className="text-2xl font-semibold">News Details</h1>
          <NewsDetailCard news={news}></NewsDetailCard>
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetailPage;
