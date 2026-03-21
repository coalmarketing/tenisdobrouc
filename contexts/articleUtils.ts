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
    const response = await fetch(`https://cms.tenisdobrouc.cz/wp-json/wp/v2/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: Article = await response.json();

    let imageUrl: string | undefined;

    if (data.featured_media) {
      try {
        const imageResponse = await fetch(`https://cms.tenisdobrouc.cz/wp-json/wp/v2/media/${data.featured_media}`);
        if (imageResponse.ok) {
          const imageData: Media = await imageResponse.json();
          imageUrl = imageData.source_url;
        }
      } catch (imageError) {
        console.error(`Error fetching image for article ${id}:`, imageError);
      }
    }

    return { article: { ...data, image: imageUrl }, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { article: null, error: errorMessage };
  }
}
