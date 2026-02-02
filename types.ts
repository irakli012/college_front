
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
  title: string;
  category: 'Achievement' | 'Event' | 'Announcement' | 'Research' | 'Athletics' | 'Campus Life';
  date: string;
  readTime?: string;
  description: string;
  image?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  badge?: string;
  year?: string;
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
  title: string;
  category: string;
  image: string;
}
