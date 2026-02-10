
import { Program, NewsItem, Book, TeamMember, GalleryItem } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Pharmacy',
    slug: 'pharmacy',
    category: 'Health Sciences',
    description: 'Master the science of medicine and clinical research with our accredited Pharmaceutical Science degree.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800',
    icon: 'medication'
  },
  {
    id: '2',
    title: 'Information Technology',
    slug: 'information-technology',
    category: 'Technology',
    description: 'Advance your career in software engineering, cybersecurity, and data science in our tech-driven labs.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    icon: 'developer_board'
  },
  {
    id: '3',
    title: 'Veterinary Medicine',
    slug: 'veterinary-medicine',
    category: 'Veterinary Arts',
    description: 'Compassionate care meets animal science. Gain hands-on clinical experience with domestic and exotic animals.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    icon: 'pets'
  },
  {
    id: '4',
    title: 'Early Childhood Ed',
    slug: 'early-childhood-education',
    category: 'Education',
    description: 'Shaping the leaders of tomorrow. Explore modern pedagogy and child development psychology.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    icon: 'school'
  },
  {
    id: '5',
    title: 'Financial Services',
    slug: 'financial-services',
    category: 'Business',
    description: 'Master global finance, investment banking, and capital markets with our professional certification track.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: 'payments'
  },
  {
    id: '6',
    title: 'Administrative Services',
    slug: 'administrative-services',
    category: 'Business',
    description: 'Optimize organizational efficiency and leadership through advanced administrative and management training.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    icon: 'business_center'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '0',
    slug: 'authorization-2026',
    category: 'Achievement',
    datetime: '2026-01-16',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '1',
    slug: 'robotics-grand-prix',
    category: 'Achievement',
    datetime: '2023-10-24',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1531746790731-6c2079ee396b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    slug: 'generative-ai-lecture',
    category: 'Event',
    datetime: '2023-10-22',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    slug: 'spring-registration-2024',
    category: 'Announcement',
    datetime: '2023-10-20',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    slug: 'biomedical-grant',
    category: 'Research',
    datetime: '2023-10-18',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1532187875605-18382124bf60?auto=format&fit=crop&q=80&w=800'
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Clinical Pharmacology: Core Concepts',
    author: 'Dr. Michael Rosenbaum',
    category: 'Pharmacy',
    image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=400',
    badge: 'Updated 2023'
  },
  {
    id: '2',
    title: 'Advanced Drug Delivery Systems',
    author: 'Elena Kostas, PhD',
    category: 'Biological Sciences',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=400',
    badge: 'Bestseller'
  },
  {
    id: '3',
    title: 'Pharmacy Practice & Management',
    author: 'Robert L. Henderson',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Helena Vance',
    role: 'College President',
    bio: 'A leader in educational policy with 25 years of experience in higher education management.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Marcus Sterling',
    role: 'Dean of Academics',
    bio: 'Specializes in curriculum development and interdisciplinary learning initiatives.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Director of Admissions',
    bio: 'Dedicated to creating inclusive pathways for students from diverse backgrounds.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Dr. Robert Chen',
    role: 'VP of Research',
    bio: 'Pioneering investigator in applied sciences and industry partnerships.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Campus Archway', category: 'Architecture', image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Main Library', category: 'Facilities', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Student Lab', category: 'Academic', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Commencement', category: 'Events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' }
];
