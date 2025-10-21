import { PRODUCTS } from '@/consts/products';
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'


function getProductsRoutes() {
  return PRODUCTS.map((product) => ({
    url: `https:/oxford-vietanh.vercel.app/products/${toLowerCaseNonAccentVietnamese(product.name).replace(/\s+/g, '-')}-p.${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));
}

const staticRoutes = [
  {
    url: 'https:/oxford-vietanh.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: 'https:/oxford-vietanh.vercel.app/products',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: 'https:/oxford-vietanh.vercel.app/about',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https:/oxford-vietanh.vercel.app/contact',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
];

export default async function sitemap() {
  const dynamicRoutes = [...getProductsRoutes()];

  return [...staticRoutes, ...dynamicRoutes];
}