import axios from 'axios';

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

export interface ArticleWithImage extends Article {
  image?: string;
}

export async function getArticle(id: string): Promise<{ article: ArticleWithImage | null; error: string | null }> {
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
