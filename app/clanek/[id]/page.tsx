'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '../../components/Button';

interface Article {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
}

interface Media {
  source_url: string;
}

interface ArticleWithImage extends Article {
  image?: string;
}

const Clanek: React.FC<{ article: ArticleWithImage | null; error: string | null }> = ({ article, error }) => {
  const router = useRouter();

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  if (!article) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="mt-20 px-[20px] sm:px-[40px] max-w-5xl mx-auto">
      <div>
        {article.image && (
          <img
            src={article.image}
            alt={article.title.rendered}
            className="w-full object-cover h-[20rem] md:h-[30rem] rounded-[10px]"
          />
        )}
        <div className='my-10'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-benzin font-medium mb-4">
            {article.title.rendered}
          </h1>
          <div className="text-base text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
          </div>
          <div className="mt-10">
            <Button to="/novinky">ZPĚT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Nová asynchronní funkce pro načtení dat
export async function getArticle(id: string) {
  try {
    const response = await axios.get<Article>(`https://www.cms.aurora-studio.cz/wp-json/wp/v2/posts/${id}`);
    const imageResponse = await axios.get<Media>(`https://www.cms.aurora-studio.cz/wp-json/wp/v2/media/${response.data.featured_media}`);

    const article: ArticleWithImage = {
      ...response.data,
      image: imageResponse.data.source_url,
    };

    return { article, error: null };
  } catch (error) {
    let errorMessage = 'An unknown error occurred.';
    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
    }

    return { article: null, error: errorMessage };
  }
}

// Toto je serverový komponent, kde načtete článek
export default async function Page({ params }: { params: { id: string } }) {
  const { article, error } = await getArticle(params.id);

  return <Clanek article={article} error={error} />;
}
