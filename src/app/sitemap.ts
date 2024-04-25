import NotionService from "../lib/notion-service";

const rootURL = "http://doplax.dev/";

export default async function sitemap() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPost();  // Recuperar posts del blog
  console.log("Posts retrieved:", posts);  // Verifica los posts recuperados

  // Rutas estáticas
  const staticUrls = [
    {
      url: `${rootURL}`,
      lastModified: new Date().toISOString().substring(0, 10),  // Utiliza la fecha actual
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${rootURL}about`,
      lastModified: new Date().toISOString().substring(0, 10),  // Utiliza la fecha actual
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${rootURL}blog`,
      lastModified: new Date().toISOString().substring(0, 10),  // Utiliza la fecha actual
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // Rutas dinámicas para cada post
  const blogUrls = posts.map(post => ({
    url: `${rootURL}blog/${post.slug}`,  // Asumimos que cada post tiene un 'slug' único
    lastModified: post.date ? new Date(post.date).toISOString().substring(0, 10) : undefined,  // Formatear la fecha
    changeFrequency: 'monthly',  // Ajusta según la lógica de negocio
    priority: 0.7,  // Prioridad menor que la página principal pero significativa
  }));

  // Concatenar rutas estáticas y dinámicas
  return [...staticUrls, ...blogUrls];
}
