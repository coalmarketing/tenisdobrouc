// app/clanek/[id]/page.tsx

import React from "react";
import { getArticle, ArticleWithImage } from "../../../contexts/articleUtils";
import Button from "../../../components/Button";
import Image from "next/image"; // Import Next.js Image component

const Clanek: React.FC<{
  article: ArticleWithImage | null;
  error: string | null;
}> = ({ article, error }) => {
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
          <Image
            src={article.image}
            alt={article.title.rendered}
            width={1200}
            height={800}
            className="w-full object-cover h-[20rem] md:h-[30rem] rounded-[10px]"
          />
        )}
        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-benzin font-medium mb-4">
            {article.title.rendered}
          </h1>
          <div className="text-base text-gray-700">
            <div
              dangerouslySetInnerHTML={{ __html: article.content.rendered }}
            />
          </div>
          <div className="mt-10">
            <Button to="/novinky">ZPĚT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mark the Page component as async to handle async/await properly
export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const { article, error } = await getArticle(params.id);

  return <Clanek article={article} error={error} />;
}
