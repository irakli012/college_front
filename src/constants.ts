
import { Program, NewsItem, Book, TeamMember, GalleryItem, CollegeDocument, Partner } from './types';

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
    title: 'Information Technology Support',
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
    readTime: '3 min read'
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
  },
  {
    id: '12',
    slug: 'college-25th-anniversary-celebration-2025',
    category: 'Achievement',
    datetime: '2025-12-25',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/607722011_888631803743241_3441297248034004220_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/606478133_888631667076588_8854138052253068173_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/605541947_888614943744927_7330877882954073070_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/605535416_888614857078269_4582086590945182698_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/605149764_888614810411607_7931354864177991140_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/605143367_888614990411589_1193617098838417232_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+27%2C+2025/602326939_888615020411586_5040667179383353062_n.jpg'
    ]
  },
  {
    id: '13',
    slug: 'master-teacher-2025-award',
    category: 'Achievement',
    datetime: '2025-12-21',
    readTime: '2 min read'
  },
  {
    id: '14',
    slug: 'cybersecurity-and-ai-workshop-2025',
    category: 'Event',
    datetime: '2025-12-02',
    readTime: '3 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+3%2C+2025/593498750_872069308732824_1845621893953009951_n.jpg',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+3%2C+2025/592717845_872069165399505_9138886190633081318_n.jpg',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/siakhleebi/collegepics+dec+3+2025-+jan+16/December+3%2C+2025/594504818_872069215399500_6575535273688668433_n.jpg'
    ]
  },
  {
    id: '15',
    slug: 'veterinary-chemistry-lab-2026',
    category: 'Campus Life',
    datetime: '2026-03-09',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-09-veterinary-chemistry-lab/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-09-veterinary-chemistry-lab/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-09-veterinary-chemistry-lab/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-09-veterinary-chemistry-lab/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-09-veterinary-chemistry-lab/04.webp'
    ]
  },
  {
    id: '16',
    slug: 'career-management-services-meeting-2026',
    category: 'Event',
    datetime: '2026-03-14',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-14-career-management-services-meeting/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-14-career-management-services-meeting/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-14-career-management-services-meeting/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-14-career-management-services-meeting/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-14-career-management-services-meeting/04.webp'
    ]
  },
  {
    id: '17',
    slug: 'thanks-to-biotex-and-roki-2026',
    category: 'Campus Life',
    datetime: '2026-03-30',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-thanks-to-biotex-and-roki/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-thanks-to-biotex-and-roki/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-thanks-to-biotex-and-roki/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-thanks-to-biotex-and-roki/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-thanks-to-biotex-and-roki/04.webp'
    ]
  },
  {
    id: '18',
    slug: 'pharmacy-chemistry-lab-2026',
    category: 'Campus Life',
    datetime: '2026-03-30',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-pharmacy-chemistry-lab/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-pharmacy-chemistry-lab/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-pharmacy-chemistry-lab/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-pharmacy-chemistry-lab/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-30-pharmacy-chemistry-lab/04.webp'
    ]
  },
  {
    id: '19',
    slug: 'teacher-professional-development-training-2026',
    category: 'Event',
    datetime: '2026-03-31',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-31-teacher-professional-development-training/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-31-teacher-professional-development-training/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-31-teacher-professional-development-training/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-31-teacher-professional-development-training/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-03-31-teacher-professional-development-training/04.webp'
    ]
  },
  {
    id: '20',
    slug: 'vocational-registration-with-national-exams-2026',
    category: 'Announcement',
    datetime: '2026-04-03',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-04-03-vocational-registration-with-national-exams/cover.webp'
  },
  {
    id: '21',
    slug: 'new-college-logo-2026',
    category: 'Announcement',
    datetime: '2026-04-07',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-04-07-new-college-logo/cover.webp'
  },
  {
    id: '22',
    slug: 'spring-admission-2026',
    category: 'Announcement',
    datetime: '2026-04-13',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-04-13-spring-admission/cover.webp'
  },
  {
    id: '23',
    slug: 'registration-ends-may-29-2026',
    category: 'Announcement',
    datetime: '2026-04-16',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-04-16-registration-ends-may-29/cover.webp'
  },
  {
    id: '24',
    slug: 'waste2wealth-training-of-trainers-2026',
    category: 'Achievement',
    datetime: '2026-05-06',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-06-waste2wealth-training-of-trainers/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-06-waste2wealth-training-of-trainers/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-06-waste2wealth-training-of-trainers/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-06-waste2wealth-training-of-trainers/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-06-waste2wealth-training-of-trainers/04.webp'
    ]
  },
  {
    id: '25',
    slug: 'pharmacy-textbook-presentation-2026',
    category: 'Achievement',
    datetime: '2026-05-25',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-pharmacy-textbook-presentation/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-pharmacy-textbook-presentation/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-pharmacy-textbook-presentation/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-pharmacy-textbook-presentation/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-pharmacy-textbook-presentation/04.webp'
    ]
  },
  {
    id: '26',
    slug: 'caregiver-creative-activities-2026',
    category: 'Campus Life',
    datetime: '2026-05-25',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-caregiver-creative-activities/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-caregiver-creative-activities/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-caregiver-creative-activities/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-caregiver-creative-activities/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-05-25-caregiver-creative-activities/04.webp'
    ]
  },
  {
    id: '27',
    slug: 'private-colleges-association-peer-visit-2026',
    category: 'Event',
    datetime: '2026-06-06',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-06-private-colleges-association-peer-visit/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-06-private-colleges-association-peer-visit/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-06-private-colleges-association-peer-visit/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-06-private-colleges-association-peer-visit/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-06-private-colleges-association-peer-visit/04.webp'
    ]
  },
  {
    id: '28',
    slug: 'exam-schedule-announced-2026',
    category: 'Announcement',
    datetime: '2026-06-15',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-15-exam-schedule-announced/cover.webp'
  },
  {
    id: '29',
    slug: 'collegial-learning-sessions-1-2026',
    category: 'Event',
    datetime: '2026-06-20',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-collegial-learning-sessions-1/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-collegial-learning-sessions-1/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-collegial-learning-sessions-1/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-collegial-learning-sessions-1/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-collegial-learning-sessions-1/04.webp'
    ]
  },
  {
    id: '30',
    slug: 'it-program-motivational-interviews-2026',
    category: 'Event',
    datetime: '2026-06-20',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-it-program-motivational-interviews/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-it-program-motivational-interviews/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-it-program-motivational-interviews/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-it-program-motivational-interviews/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-06-20-it-program-motivational-interviews/04.webp'
    ]
  },
  {
    id: '31',
    slug: 'collegial-learning-sessions-2-2026',
    category: 'Event',
    datetime: '2026-07-02',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-02-collegial-learning-sessions-2/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-02-collegial-learning-sessions-2/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-02-collegial-learning-sessions-2/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-02-collegial-learning-sessions-2/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-02-collegial-learning-sessions-2/04.webp'
    ]
  },
  {
    id: '32',
    slug: 'tsu-vocational-education-conference-2026',
    category: 'Achievement',
    datetime: '2026-07-07',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-tsu-vocational-education-conference/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-tsu-vocational-education-conference/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-tsu-vocational-education-conference/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-tsu-vocational-education-conference/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-tsu-vocational-education-conference/04.webp'
    ]
  },
  {
    id: '33',
    slug: 'staff-excursion-2026',
    category: 'Campus Life',
    datetime: '2026-07-07',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-staff-excursion/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-staff-excursion/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-staff-excursion/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-staff-excursion/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-07-staff-excursion/04.webp'
    ]
  },
  {
    id: '34',
    slug: 'preschool-success-formula-workshop-2026',
    category: 'Event',
    datetime: '2026-07-11',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-11-preschool-success-formula-workshop/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-11-preschool-success-formula-workshop/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-11-preschool-success-formula-workshop/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-11-preschool-success-formula-workshop/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-11-preschool-success-formula-workshop/04.webp'
    ]
  },
  {
    id: '35',
    slug: 'education-elevator-program-2026',
    category: 'Achievement',
    datetime: '2026-07-12',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-12-education-elevator-program/cover.webp'
  },
  {
    id: '36',
    slug: 'caregiver-learning-by-doing-2026',
    category: 'Campus Life',
    datetime: '2026-07-17',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-17-caregiver-learning-by-doing/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-17-caregiver-learning-by-doing/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-17-caregiver-learning-by-doing/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-17-caregiver-learning-by-doing/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-17-caregiver-learning-by-doing/04.webp'
    ]
  },
  {
    id: '37',
    slug: 'pharmacy-qualification-exam-2026',
    category: 'Achievement',
    datetime: '2026-07-23',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-23-pharmacy-qualification-exam/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-23-pharmacy-qualification-exam/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-23-pharmacy-qualification-exam/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-23-pharmacy-qualification-exam/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-23-pharmacy-qualification-exam/04.webp'
    ]
  },
  {
    id: '38',
    slug: 'caregiver-practical-project-presentations-2026',
    category: 'Achievement',
    datetime: '2026-07-26',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-26-caregiver-practical-project-presentations/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-26-caregiver-practical-project-presentations/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-26-caregiver-practical-project-presentations/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-26-caregiver-practical-project-presentations/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-07-26-caregiver-practical-project-presentations/04.webp'
    ]
  },
  {
    id: '39',
    slug: 'network-technologies-training-ankara-2026',
    category: 'Achievement',
    datetime: '2026-08-06',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-06-network-technologies-training-ankara/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-06-network-technologies-training-ankara/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-06-network-technologies-training-ankara/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-06-network-technologies-training-ankara/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-06-network-technologies-training-ankara/04.webp'
    ]
  },
  {
    id: '41',
    slug: 'applicants-chose-vocational-education-2026',
    category: 'Announcement',
    datetime: '2026-08-26',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-08-26-applicants-chose-vocational-education/cover.webp'
  },
  {
    id: '42',
    slug: 'secondary-enrollment-2026',
    category: 'Announcement',
    datetime: '2026-09-14',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-14-secondary-enrollment/cover.webp'
  },
  {
    id: '43',
    slug: 'collegial-learning-sessions-3-2026',
    category: 'Event',
    datetime: '2026-09-25',
    readTime: '1 min read',
    image: 'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-25-collegial-learning-sessions-3/cover.webp',
    images: [
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-25-collegial-learning-sessions-3/01.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-25-collegial-learning-sessions-3/02.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-25-collegial-learning-sessions-3/03.webp',
      'https://college-website-assets.s3.eu-north-1.amazonaws.com/news/2026/2026-09-25-collegial-learning-sessions-3/04.webp'
    ]
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Pharmacy Resources Collection',
    author: 'College Ilia Library',
    category: 'Pharmacy',
    image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=400',
    badge: '15+ Books',
    year: '2025',
    viewUrl: 'https://drive.google.com/drive/folders/1jcd3RbwhpGYrJPJF3aQz0vzxV0Xb6X_h',
    downloadUrl: 'https://drive.google.com/drive/folders/1jcd3RbwhpGYrJPJF3aQz0vzxV0Xb6X_h'
  },
  {
    id: '2',
    title: 'Early Childhood Education Library',
    author: 'College Ilia Library',
    category: 'Early Childhood Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
    badge: 'Updated',
    year: '2025',
    viewUrl: 'https://drive.google.com/drive/folders/1CfNHeS10SLU12uA1NT5yd6EdBjrm06M6',
    downloadUrl: 'https://drive.google.com/drive/folders/1CfNHeS10SLU12uA1NT5yd6EdBjrm06M6'
  },
  {
    id: '3',
    title: 'IT & Computer Science Materials',
    author: 'College Ilia Library',
    category: 'Information Technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
    badge: 'Resources',
    year: '2025',
    viewUrl: 'https://drive.google.com/drive/folders/1MIWsL3jE5311PwDVgfjCztuDKIhXis6p',
    downloadUrl: 'https://drive.google.com/drive/folders/1MIWsL3jE5311PwDVgfjCztuDKIhXis6p'
  },
  {
    id: '4',
    title: 'Veterinary Medicine Archives',
    author: 'College Ilia Library',
    category: 'Veterinary Medicine',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400',
    badge: 'Coming Soon'
  },
  {
    id: '5',
    title: 'Financial Services & Business',
    author: 'College Ilia Library',
    category: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    badge: 'Coming Soon'
  }
];

const ASSETS_URL = 'https://college-website-assets.s3.eu-north-1.amazonaws.com';

export const SITE_IMAGES = {
  building: `${ASSETS_URL}/site/home/hero-building.webp`,
  flags: `${ASSETS_URL}/site/home/flags.webp`
};

// Photos live in S3 as gallery/NN.webp with a 600px version in gallery/thumb/NN.webp
export const GALLERY: GalleryItem[] = Array.from({ length: 30 }, (_, i) => {
  const name = String(i + 1).padStart(2, '0');
  return {
    id: name,
    image: `${ASSETS_URL}/gallery/${name}.webp`,
    thumb: `${ASSETS_URL}/gallery/thumb/${name}.webp`
  };
});

// Pin of "საგარეჯოს საზოგადოებრივი კოლეჯი" on Google Maps
export const COLLEGE_LOCATION = {
  lat: 41.7362356,
  lng: 45.3135941,
  mapsUrl: 'https://maps.app.goo.gl/5ZwQZng31Y2cVJ9WA'
};

// Same order as the partners page on iliaedu.ge; logos live in S3 under partners/
export const PARTNERS: Partner[] = [
  { id: 'mes', url: 'https://www.mes.gov.ge/' },
  { id: 'emis', url: 'https://www.emis.ge/' },
  { id: 'eqe', url: 'https://eqe.ge/ka' },
  { id: 'pcag', url: 'https://www.ccol.ge/' },
  { id: 'liberty-bank', url: 'https://libertybank.ge' },
  { id: 'psp', url: 'https://psp.ge/' },
  { id: 'sagarejo-municipality', url: 'https://sagarejo.gov.ge/' },
  { id: 'biotecsi', url: 'https://biotecsi.ge' },
  { id: 'roqi', url: 'https://roqi.ge/ka' },
  { id: 'care-caucasus', url: 'https://care-caucasus.org.ge/' },
  { id: 'first-medical-school', url: 'https://www.medicalschool.edu.ge/ge' },
  { id: 'finforce', url: 'https://www.finforce.ge/' }
].map((p) => ({ ...p, logo: `${ASSETS_URL}/partners/${p.id}.webp` }));

// Programs catalogs (PDFs in Google Drive), newest first
export const PROGRAM_CATALOGS = [
  { year: 2025, fileId: '1b_cL0HAItfkIA0GPQBjGZYiKQl13Dtcc' },
  { year: 2024, fileId: '1ZnOjxIF2pdSBSilr0YpNywSQt9FxcUpG' }
];

// Mandatory college documents, hosted in the college's Google Drive
export const DOCUMENTS: CollegeDocument[] = [
  { id: 'publicRelations', kind: 'document', icon: 'campaign', url: 'https://docs.google.com/document/d/1or4eWvJRUjJzINJTnlf-tzcI_gTrY0rl/edit?usp=sharing' },
  { id: 'studentEthics', kind: 'document', icon: 'gavel', url: 'https://docs.google.com/document/d/1U9GQJpp8jViuYHoW0S1gLBA3RyZsOb2q/edit?usp=sharing' },
  { id: 'diplomaSamples', kind: 'folder', icon: 'workspace_premium', url: 'https://drive.google.com/drive/folders/1IWdVe_Y8cA8YXRKY6c-K-1q2NBc4x0FG' },
  { id: 'studentSupport', kind: 'document', icon: 'support_agent', url: 'https://docs.google.com/document/d/1gQg6ChJW7mbra1ecRkb0RvgkquCtWDEx/edit?usp=sharing' },
  { id: 'libraryRegulations', kind: 'document', icon: 'local_library', url: 'https://docs.google.com/document/d/1fefcn7rLjEZctD5ABduoKayf5nUHFMBW/edit?usp=sharing' },
  { id: 'eLearning', kind: 'document', icon: 'laptop_chromebook', url: 'https://docs.google.com/document/d/19QFCUP7AetnMvJvS0VCCAmMEWfneNzPO/edit?usp=sharing' },
  { id: 'materialResources', kind: 'document', icon: 'inventory_2', url: 'https://docs.google.com/document/d/1Iv_Z6LnTqvgI8ztF4Mi_2smQY1P_qNQn/edit?usp=sharing' }
];
