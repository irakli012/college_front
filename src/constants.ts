
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
    slug: 'care-caucasus-camp',
    category: 'Campus Life',
    datetime: '2025-08-06',
    readTime: '2 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/526291657_1058217516429271_2508264801241142517_n.jpg'
  },
  {
    id: '2',
    slug: 'fun-starts-2025',
    category: 'Athletics',
    datetime: '2025-07-29',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/524909241_769691358970620_2485363472320599240_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/525699220_769690905637332_7209138842343071870_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/524925866_769691118970644_3033781340104789767_n.jpg'
    ]
  },
  {
    id: '3',
    slug: 'pharmacy-qualification-exam-2025',
    category: 'Achievement',
    datetime: '2025-07-25',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/522113672_767427025863720_9056419593296847667_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/522140682_767427072530382_7012888275632029486_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/523698432_767426809197075_1068801176701146171_n.jpg'
    ]
  },
  {
    id: '4',
    slug: 'first-aid-training-2025',
    category: 'Event',
    datetime: '2025-07-26',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/gadaudebeli1.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/gadaudebeli3.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/gadaudebeli2.jpg'
    ]
  },
  {
    id: '5',
    slug: 'care-caucasus-project-continuation',
    category: 'Campus Life',
    datetime: '2025-09-24',
    readTime: '2 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/552641317_815322411074181_5027410703119467999_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/552432704_815322567740832_181016890449821037_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/552823647_815322467740842_7395701469848450646_n+(1).jpg'
    ]
  },
  {
    id: '6',
    slug: 'outcome-oriented-learning-workshop-2025',
    category: 'Event',
    datetime: '2025-10-03',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/557010592_822784280327994_8465129713550821435_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/557834376_822784190328003_3053582669301900722_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/557581844_822783993661356_3101709290178426353_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/557215386_822783843661371_3167240842525517441_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/560040860_822782970328125_8862178115300845518_n.jpg'
    ]
  },
  {
    id: '7',
    slug: 'strategic-action-plan-presentation-2025',
    category: 'Announcement',
    datetime: '2025-08-22',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/91e5b3a9-ffb7-4a79-8dea-e794b3018e22.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/522113672_767427025863720_9056419593296847667_n.jpg'
    ]
  },
  {
    id: '8',
    slug: 'veterinary-qualification-exam-2025',
    category: 'Achievement',
    datetime: '2025-10-17',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/565336002_834912119115210_5339261949339063114_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/565749458_834911979115224_8264660548879637078_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/565711065_834911815781907_936458716254517926_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/565749456_834912192448536_1477898766653927122_n.jpg'
    ]
  },
  {
    id: '9',
    slug: 'college-25th-anniversary-2025',
    category: 'Achievement',
    datetime: '2025-11-25',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/586363826_866014659338289_4177925537430529593_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/588488255_866010592672029_5402399351846453242_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/588435711_866011019338653_190348047142990683_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/588467911_866012939338461_3510544305750106630_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/588664207_866010909338664_5898751201024582876_n.jpg'
    ]
  },
  {
    id: '10',
    slug: 'fao-georgia-cream-cheese-technology-workshop-2025',
    category: 'Event',
    datetime: '2025-10-22',
    readTime: '2 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/570588817_839950471944708_6036503938012402327_n.jpg'
  },
  {
    id: '11',
    slug: 'ideathon-kakheti-innovation-workshop-2025',
    category: 'Event',
    datetime: '2025-10-21',
    readTime: '2 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/568952245_839941611945594_6741043971588565868_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/571217462_839941545278934_5667220124981597240_n.jpg'
    ]
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

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Campus Archway', category: 'Architecture', image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Main Library', category: 'Facilities', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Student Lab', category: 'Academic', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Commencement', category: 'Events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' }
];
