
export interface Program {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  category: 'Achievement' | 'Event' | 'Announcement' | 'Research' | 'Athletics' | 'Campus Life';
  datetime: string; // ISO 8601 format for sorting and machine readability
  readTime?: string;
  image?: string;
  images?: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  badge?: string;
  year?: string;
  viewUrl?: string;
  downloadUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  thumb: string;
}

export interface Partner {
  id: string; // translation key under partnersPage.items
  url: string;
  logo: string;
}

export interface CollegeDocument {
  id: string; // translation key under documentsPage.items
  url: string;
  kind: 'document' | 'folder';
  icon: string;
}
