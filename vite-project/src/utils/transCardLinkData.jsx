export const transCardLinkData = data => {
  try {
    if (data && data.folder) {
      return {
        links: data.folder.links.map(item => ({
          id: item.id,
          createdAt: item.createdAt,
          url: item.url,
          title: item.title,
          description: item.description,
          imageSource: item.imageSource,
        })),
      };
    } else if (data && data.data) {
      return {
        links: data.data.map(item => ({
          id: item.id,
          createdAt: item.created_at,
          url: item.url,
          title: item.title,
          description: item.description,
          imageSource: item.image_source,
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
