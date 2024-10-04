"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button';

interface Article {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  image?: string;
}

interface ArticlesProps {
  count?: number;
}

const Articles: React.FC<ArticlesProps> = ({ count }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname(); // Použití usePathname

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>('https://www.cms.aurora-studio.cz/wp-json/wp/v2/posts');
        const articlesWithImages = await Promise.all(response.data.map(async (article) => {
          try {
            const imageResponse = await axios.get<{ source_url: string }>(`https://www.cms.aurora-studio.cz/wp-json/wp/v2/media/${article.featured_media}`);
            return {
              ...article,
              image: imageResponse.data.source_url
            };
          } catch (imageError) {
            console.error(`Error fetching image for article ${article.id}:`, imageError);
            return article;
          }
        }));

        setArticles(articlesWithImages);
        setLoading(false);
      } catch (fetchError) {
        if (axios.isAxiosError(fetchError)) {
          setError(fetchError.message);
        } else {
          setError('An unknown error occurred.');
        }
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  const articlesToDisplay = count ? articles.slice(0, count) : articles;

  return (
    <div className="sirka mt-20">
      <h1 className='text-center'><span className='text-zluta'>Novinky</span> z kurtů</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {articlesToDisplay.map(article => (
          <Link key={article.id} href={`/clanek/${article.id}`} legacyBehavior>
            <a className="block">
              <div className="relative flex flex-col bg-white rounded-[30px] shadow-[0px_20px_18px_5px_rgba(0,0,0,0.25)] h-full">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title.rendered}
                    width={500}
                    height={300}
                    className="w-full object-cover h-[20rem] rounded-t-[30px]"
                  />
                )}
                <div className="h-5 bg-zluta"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-3xl font-benzin font-medium mb-4 line-clamp-3">{article.title.rendered}</h2>
                  <div className="text-base text-gray-700 overflow-hidden flex-1">
                    <div className="line-clamp-5" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                  </div>
                  <div className="pt-4 mt-auto">
                    <span className="text-zluta font-semibold">Více...</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {pathname === '/' ? (
        <div className='flex mt-16 justify-center'>
          <Button to="/novinky">ZOBRAZIT BLOG</Button>
        </div>
      ) : (
        <div className='flex mt-32'></div>
      )}
    </div>
  );
};

export default Articles;
