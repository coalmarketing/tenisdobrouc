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
    // Změna URL na nový WordPress
    const response = await axios.get<Article>(`https://cms.tenisdobrouc.cz/wp-json/wp/v2/posts/${id}`);
    
    let imageUrl: string | undefined;

    // Kontrola, zda je featured_media nastavené a zisk obrázku
    if (response.data.featured_media) {
      try {
        const imageResponse = await axios.get<Media>(`https://cms.tenisdobrouc.cz/wp-json/wp/v2/media/${response.data.featured_media}`);
        imageUrl = imageResponse.data.source_url;
      } catch (imageError) {
        console.error(`Error fetching image for article ${id}:`, imageError);
      }
    }

    const article: ArticleWithImage = {
      ...response.data,
      image: imageUrl, // Nastavení obrázku, pokud byl úspěšně načten
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
