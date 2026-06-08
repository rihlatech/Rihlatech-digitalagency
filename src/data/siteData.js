import {
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import {
  MdOutlineDesignServices,
  MdOutlineWeb,
  MdOutlineCampaign,
  MdOutlineBusiness,
} from 'react-icons/md'
import {
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlineCode,
  AiOutlinePieChart,
  AiOutlineBulb,
  AiOutlineDribbble,
} from 'react-icons/ai'

const quoteBase = 'https://wa.me/254719310048?text='

const encode = (text) => encodeURIComponent(text)

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export const heroButtons = [
  { label: 'Get Started', to: '/services', variant: 'primary' },
  { label: 'View Portfolio', to: '/portfolio', variant: 'secondary' },
  {
    label: 'Request a Quote',
    href: 'https://wa.me/254719310048',
    variant: 'outline',
  },
]

export const whyChooseUs = [
  {
    title: 'Professional Solutions',
    description: 'Strategy-driven services with polished delivery that elevate your brand.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Fast Delivery',
    description: 'Quick turnarounds without compromising quality or consistency.',
    icon: HiOutlineClock,
  },
  {
    title: 'Modern Design',
    description: 'Clean visuals, premium layouts, and modern digital experiences.',
    icon: HiOutlineChartBar,
  },
  {
    title: 'Client Focused',
    description: 'We build every project around your goals, audience, and growth.',
    icon: HiOutlineUserGroup,
  },
]

export const services = [
  {
    title: 'Graphic Design',
    description: 'Brand assets, marketing visuals, and layout systems that stand out.',
    features: [
      'Brand identity and logos',
      'Social media visuals',
      'Marketing collateral',
    ],
    icon: MdOutlineDesignServices,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in your Graphic Design services. Please send me a quote.')}`,
  },
  {
    title: 'Web Design',
    description: 'Branded websites and landing pages built for clarity, conversion, and speed.',
    features: [
      'Responsive UI design',
      'Website mockups & prototypes',
      'Conversion-focused layouts',
    ],
    icon: MdOutlineWeb,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in your Web Design services. Please send me a quote.')}`,
  },
  {
    title: 'Social Media Management',
    description: 'Branded campaigns, calendar planning, and content that attracts attention.',
    features: [
      'Content planning',
      'Post design & scheduling',
      'Performance monitoring',
    ],
    icon: MdOutlineCampaign,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in your Social Media Management services. Please send me a quote.')}`,
  },
]

export const packages = [
  {
    title: 'Startup Package',
    description: 'A lean digital launch package for new businesses and early-stage brands.',
    features: ['Basic website', 'Social media setup', 'Graphic design support'],
    icon: HiOutlineRocketLaunch,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in the Startup Package. Please send me details and pricing.')}`,
  },
  {
    title: 'Growth Package',
    description: 'A growth-ready package for brands that want consistent creative support.',
    features: ['Professional website', 'Monthly graphics', 'Social media management'],
    icon: HiOutlineChartBar,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in the Growth Package. Please send me details and pricing.')}`,
  },
  {
    title: 'Business Pro Package',
    description: 'Premium support for established brands that need a full digital presence.',
    features: ['Premium website', 'Full social media management', 'Branding support'],
    icon: HiOutlineShieldCheck,
    quoteLink:
      `${quoteBase}${encode('Hello RihlaTech, I am interested in the Business Pro Package. Please send me details and pricing.')}`,
  },
]

export const portfolioItems = [
  {
    title: 'Launch-ready website',
    category: 'Web experience',
    description: 'A premium website concept built for modern agencies and tech brands.',
    icon: AiOutlineLaptop,
  },
  {
    title: 'Brand identity suite',
    category: 'Graphic systems',
    description: 'Logo, color palette, and visual language for a high-end launch.',
    icon: AiOutlineBulb,
  },
  {
    title: 'Social media campaign',
    category: 'Digital marketing',
    description: 'Campaign visuals designed for engagement across social feeds.',
    icon: AiOutlineDribbble,
  },
  {
    title: 'Product landing',
    category: 'Conversion design',
    description: 'Focused landing page layout built for product launches and promotions.',
    icon: AiOutlinePieChart,
  },
  {
    title: 'Mobile brand refresh',
    category: 'Mobile design',
    description: 'A polished experience designed for on-the-go audiences.',
    icon: AiOutlineMobile,
  },
  {
    title: 'Visual systems',
    category: 'Creative direction',
    description: 'Abstract brand visuals and mockups for digital-first projects.',
    icon: AiOutlineCode,
  },
]

export const contactInfo = {
  phone: '0719310048',
  email: 'rihlatechcompany@gmail.com',
  whatsapp: 'https://wa.me/254719310048',
}

export const portfolioQuoteLink =
  `${quoteBase}${encode('Hello RihlaTech, I would like a quote for a similar project. Please share details.')}`
