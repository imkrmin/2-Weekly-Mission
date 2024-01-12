interface Link {
  id: number;
  createdAt: number;
  url: string;
  title: string;
  description: string;
  imageSource: string | null;
}

interface FolderData {
  folder: {
    links: Array<{
      id: number;
      createdAt: number;
      url: string;
      title: string;
      description: string;
      imageSource: string | null;
    }>;
  };
}

interface SharedData {
  data: Array<{
    id: number;
    created_at: number;
    url: string;
    title: string;
    description: string;
    image_source: string | null;
  }>;
}

type InputData = FolderData | SharedData;

export interface TransformedData {
  links?: Link[];
}

export const transCardLinkData = (data: InputData): TransformedData => {
  try {
    if ("folder" in data) {
      return {
        links: data.folder.links.map(item => ({
          id: item.id,
          createdAt: item.createdAt,
          url: item.url,
          title: item.title,
          description: item.description,
          imageSource: item.imageSource || null,
        })),
      };
    } else if ("data" in data) {
      return {
        links: data.data.map(item => ({
          id: item.id,
          createdAt: item.created_at,
          url: item.url,
          title: item.title,
          description: item.description,
          imageSource: item.image_source || null,
        })),
      };
    } else {
      return { links: [] };
    }
  } catch (error) {
    console.error("Error transforming data:", error);
    return { links: [] };
  }
};
