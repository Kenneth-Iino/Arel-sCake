export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  occasion?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type CategoryFilter = 'all' | 'birthday' | 'wedding' | 'anniversary' | 'kids' | 'brownies' | 'tarts' | 'specialty' | 'seasonal';