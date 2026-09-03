export const SERVICES = [
  {
    slug: 'health',
    title: 'Health Insurance',
    shortDesc: 'Comprehensive health coverage for individuals, families, and diaspora communities across Africa.',
    description: 'Our Health Insurance plans provide comprehensive medical coverage tailored for Africa\'s growing middle class and diaspora communities. From routine check-ups to emergency evacuations, we ensure you and your family are protected wherever life takes you.',
    icon: 'Heart',
    image: '/images/health-insurance.jpg',
    features: ['Hospital & Inpatient Care', 'Outpatient Services', 'Prescription Coverage', 'Emergency Medical Evacuation', 'Family & Dependent Plans', 'International Coverage'],
    plans: [
      { name: 'Standard', price: 29, features: ['Basic hospital coverage', 'Outpatient visits (10/year)', 'Generic prescriptions', 'Local network only'], highlighted: false },
      { name: 'Premium', price: 59, features: ['Full hospital coverage', 'Unlimited outpatient', 'All prescriptions covered', 'Regional network', 'Emergency evacuation', 'Dental & vision'], highlighted: true },
      { name: 'Diaspora Family', price: 99, features: ['Global hospital coverage', 'Unlimited everything', 'Family up to 6 members', 'International network', 'Medical evacuation worldwide', 'Telemedicine 24/7'], highlighted: false },
    ],
    faqs: [
      { q: 'What hospitals are in the network?', a: 'We partner with over 500 hospitals across 15 African countries, plus international facilities for Diaspora plans.' },
      { q: 'Can I add family members later?', a: 'Yes, you can add dependents at any time. Coverage begins within 48 hours of enrollment.' },
      { q: 'Is there a waiting period?', a: 'Standard plans have a 30-day waiting period. Premium and Diaspora plans have no waiting period for emergencies.' },
      { q: 'How do I file a claim?', a: 'Claims can be filed through our mobile app, website portal, or by calling our 24/7 claims hotline.' },
    ],
  },
  {
    slug: 'life',
    title: 'Life Insurance',
    shortDesc: 'Secure your family\'s future with flexible life insurance plans designed for African realities.',
    description: 'Life Insurance from Dipita-Insura gives your loved ones financial security when they need it most. Our plans are designed around the unique needs of African families and diaspora communities, offering flexible terms and competitive premiums.',
    icon: 'Shield',
    image: '/images/hero-1.jpg',
    features: ['Term Life Coverage', 'Whole Life Policies', 'Family Protection Plans', 'Diaspora Repatriation Benefit', 'Accidental Death Benefit', 'Critical Illness Rider'],
    plans: [
      { name: 'Basic', price: 15, features: ['Term life coverage', '10-year term', 'Accidental death benefit', 'Online management'], highlighted: false },
      { name: 'Core Family', price: 35, features: ['Extended family coverage', '20-year term', 'Spouse coverage included', 'Critical illness rider', 'Repatriation benefit'], highlighted: true },
      { name: 'Global Diaspora', price: 65, features: ['Maximum whole-life coverage', 'Whole life policy', 'Full family coverage', 'Worldwide validity', 'Investment component', 'Premium waiver option'], highlighted: false },
    ],
    faqs: [
      { q: 'What is the difference between term and whole life?', a: 'Term life covers a specific period (10-30 years), while whole life provides lifelong coverage with a savings component.' },
      { q: 'Can I change my beneficiary?', a: 'Yes, you can update beneficiaries at any time through your online account or by contacting us.' },
      { q: 'Is medical examination required?', a: 'Basic plans require only a health questionnaire. Higher coverage plans may require a simple medical check.' },
      { q: 'What is the repatriation benefit?', a: 'For diaspora members, we cover the cost of remains repatriation to the home country, including all logistics.' },
    ],
  },
  {
    slug: 'auto',
    title: 'Auto Insurance',
    shortDesc: 'Drive with confidence — from basic liability to full comprehensive coverage across Africa.',
    description: 'Our Auto Insurance plans protect you on every road in Africa. Whether you need basic liability coverage or full comprehensive protection with roadside assistance, we have the right plan for your vehicle and budget.',
    icon: 'Car',
    image: '/images/auto-insurance.jpg',
    features: ['Comprehensive Collision Coverage', 'Third-Party Liability', 'Roadside Assistance 24/7', 'New-for-Old Replacement', 'Personal Accident Cover', 'Multi-Vehicle Discount'],
    plans: [
      { name: 'Basic', price: 10, features: ['Third-party liability', 'Legal defense costs', 'Basic roadside assist', 'Online claims'], highlighted: false },
      { name: 'Roadside Premium', price: 25, features: ['Comprehensive collision', 'Full roadside assistance', 'Windshield coverage', 'Rental car benefit', 'Personal accident cover'], highlighted: true },
      { name: 'Full Comprehensive', price: 45, features: ['New-for-old replacement', 'Zero depreciation', 'Worldwide coverage', 'Multi-vehicle discount', 'VIP roadside service', 'No-claim bonus protection'], highlighted: false },
    ],
    faqs: [
      { q: 'Does coverage apply across borders?', a: 'Our Comprehensive plan covers you in 20+ African countries. Check the policy document for the full list.' },
      { q: 'How fast is the claims process?', a: 'Simple claims are processed within 48 hours. Complex claims within 14 business days.' },
      { q: 'Can I insure multiple vehicles?', a: 'Yes! We offer a 15% discount when you insure 2 or more vehicles with us.' },
      { q: 'What about electric vehicles?', a: 'We provide specialized EV coverage including battery replacement and charging station damage.' },
    ],
  },
  {
    slug: 'business',
    title: 'Business Insurance',
    shortDesc: 'Protect your enterprise with tailored coverage for African SMEs and growing corporations.',
    description: 'Business Insurance from Dipita-Insura shields your enterprise against unforeseen risks. From micro-SMEs to growing corporations, our plans cover property damage, liability claims, and business interruption so you can focus on growth.',
    icon: 'Building2',
    image: '/images/business-insurance.jpg',
    features: ['Commercial Property Protection', 'General Liability Coverage', 'Business Interruption Insurance', 'Professional Indemnity', 'Employee Benefits Package', 'Cyber Risk Protection'],
    plans: [
      { name: 'Micro-SME', price: 30, features: ['Commercial property coverage', 'Basic liability', 'Fire & theft protection', 'Online management portal'], highlighted: false },
      { name: 'Growing Enterprise', price: 75, features: ['Expanded property coverage', 'Full liability suite', 'Business interruption', 'Professional indemnity', 'Employee benefits'], highlighted: true },
      { name: 'Corporate Shield', price: 150, features: ['Enterprise property coverage', 'Comprehensive liability', 'Full interruption coverage', 'Cyber risk protection', 'Director & officer liability', 'Custom risk assessment'], highlighted: false },
    ],
    faqs: [
      { q: 'Do you cover home-based businesses?', a: 'Yes, our Micro-SME plan is perfect for home-based and solo entrepreneur businesses.' },
      { q: 'What is business interruption coverage?', a: 'It covers lost income and operating expenses if your business is temporarily shut down due to a covered event.' },
      { q: 'Can I bundle with employee health coverage?', a: 'Absolutely. We offer attractive bundle discounts when combining business and employee health plans.' },
      { q: 'How is the premium calculated?', a: 'Premiums are based on business type, revenue, number of employees, and risk assessment results.' },
    ],
  },
  {
    slug: 'education',
    title: 'Education Insurance',
    shortDesc: 'Invest in tomorrow — secure your children\'s education journey from primary school to university.',
    description: 'Education Insurance ensures that your children\'s academic journey is never interrupted by financial setbacks. Our plans cover tuition, study abroad expenses, and provide a safety net for families investing in their children\'s future.',
    icon: 'GraduationCap',
    image: '/images/education-insurance.jpg',
    features: ['Tuition Protection Plans', 'Study Abroad Coverage', 'University Fee Guarantee', 'Scholarship Loss Protection', 'Parent Life Cover Add-on', 'Flexible Payment Schedules'],
    plans: [
      { name: 'Primary', price: 20, features: ['Primary tuition protection', 'School supply allowance', 'Parent accident cover', 'Flexible monthly payments'], highlighted: false },
      { name: 'Secondary', price: 45, features: ['Secondary tuition protection', 'Boarding school coverage', 'Exam re-sit fees', 'Parent life cover', 'Career counseling benefit'], highlighted: true },
      { name: 'Global Scholar', price: 85, features: ['Full university tuition protection', 'Study abroad full coverage', 'Living expenses abroad', 'University guarantee fund', 'Emergency repatriation', 'Laptop & equipment cover'], highlighted: false },
    ],
    faqs: [
      { q: 'When should I start an education plan?', a: 'The earlier the better! Starting early means lower premiums and more time for the fund to grow.' },
      { q: 'What if my child gets a scholarship?', a: 'You can reduce coverage, pause payments, or redirect funds to another child or educational purpose.' },
      { q: 'Does it cover international universities?', a: 'The Global Scholar plan covers tuition at universities worldwide, including living and travel expenses.' },
      { q: 'Can I cover multiple children?', a: 'Yes, with a 10% discount per additional child on the same plan type.' },
    ],
  },
];

export const TEAM = [
  { name: 'Laito French', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in African insurance markets. Passionate about making quality coverage accessible to every African family.' },
  { name: 'Adam Ivan', role: 'Chief Advisor', bio: 'Strategic advisor with deep expertise in risk management and regulatory compliance across multiple African jurisdictions.' },
  { name: 'Rebecca Leo', role: 'Web Designer', bio: 'Creative force behind our digital experience. Rebecca ensures every touchpoint reflects our premium brand promise.' },
  { name: 'Donald John', role: 'Executive Manager', bio: 'Operations expert who keeps our service delivery seamless. Donald leads our customer success and claims processing teams.' },
  { name: 'Iven Rocky', role: 'Web Developer', bio: 'Technical architect powering our digital platform. Iven builds the tools that make insurance simple and accessible.' },
];

export const BLOG_POSTS = [
  { slug: 'family-health-tips', title: 'Protecting Your Family\'s Health in 2026', excerpt: 'Discover essential health coverage strategies that every African family should consider for comprehensive protection in the modern era.', category: 'Health', date: 'Jan 15, 2026', image: '/images/hero-2.jpg', content: [
    'Health insurance remains one of the most important financial decisions a family can make, and 2026 brings new options worth understanding before you renew or switch plans.',
    'Start by mapping your family\'s actual usage: routine checkups, chronic conditions, and the specialists you see most often. A plan that looks cheap on paper can cost more once you factor in out-of-pocket visits.',
    'Look for plans that bundle maternity, pediatric, and preventive care rather than pricing each separately — bundled coverage is usually more predictable for growing families.',
    'Finally, revisit your coverage every year. Family circumstances change, and the right plan at 25 is rarely the right plan at 40.',
  ] },
  { slug: 'financial-planning', title: 'Smart Financial Planning for the African Diaspora', excerpt: 'Expert insights on building a secure financial future while managing cross-border responsibilities and family obligations.', category: 'Finance', date: 'Feb 8, 2026', image: '/images/modern-house.jpg', content: [
    'Managing money across two countries adds real complexity — exchange rate risk, remittance obligations, and two sets of financial rules to navigate.',
    'A practical starting point is separating short-term remittance funds from long-term savings, so currency swings don\'t derail your family\'s goals back home.',
    'Insurance plays a bigger role here than most people expect: cross-border health and life coverage protects both the diaspora earner and the family depending on that income.',
    'Working with advisors who understand both jurisdictions — not just one — tends to produce far better long-term outcomes.',
  ] },
  { slug: 'entrepreneurship-risks', title: 'Managing Risks as an African Entrepreneur', excerpt: 'From startup to scale-up, learn how the right insurance coverage can protect your business at every growth stage.', category: 'Business', date: 'Mar 3, 2026', image: '/images/business-tech.jpg', content: [
    'Every stage of a growing business carries different risks, and insurance needs to grow alongside the company rather than being an afterthought.',
    'Early-stage founders often underinsure liability exposure, assuming risk is low simply because the company is small — but a single incident can wipe out years of progress.',
    'As you scale and hire, employee-related coverage and business interruption protection become just as important as the assets themselves.',
    'Reviewing your policy at each funding or growth milestone keeps coverage aligned with what you actually stand to lose.',
  ] },
  { slug: 'diaspora-insights', title: 'Insurance Tips for the African Diaspora Community', excerpt: 'Navigating insurance across borders can be complex. Here\'s your comprehensive guide to staying protected abroad.', category: 'Diaspora', date: 'Apr 12, 2026', image: '/images/hero-1.jpg', content: [
    'Living abroad while maintaining ties at home means juggling two very different insurance systems, often with little guidance on how they interact.',
    'A common mistake is assuming a policy purchased abroad automatically covers family members back home — most don\'t, and the gap only becomes visible during a claim.',
    'Look specifically for providers offering cross-border health and life products designed for diaspora communities, rather than adapting a purely domestic plan.',
    'Keeping documentation and beneficiary details updated across both countries avoids painful delays exactly when your family needs support most.',
  ] },
  { slug: 'auto-care-guide', title: 'The Complete Guide to Auto Insurance in Africa', excerpt: 'Understanding auto coverage options, claims processes, and how to choose the right policy for your vehicle and driving habits.', category: 'Auto', date: 'May 20, 2026', image: '/images/auto-insurance.jpg', content: [
    'Auto insurance requirements and typical coverage vary widely across African markets, which makes comparing policies more confusing than it needs to be.',
    'Beyond the legally required minimum, comprehensive coverage is worth the extra premium in cities with higher accident or theft rates.',
    'Understanding the claims process before you need it — required documents, response times, approved repair shops — saves enormous stress after an incident.',
    'Bundling auto with other policies, like home or health, often unlocks meaningful discounts many drivers never ask about.',
  ] },
  { slug: 'education-investment', title: 'Investing in Your Child\'s Education Future', excerpt: 'Why education insurance is the smartest investment African parents can make for their children\'s academic journey.', category: 'Education', date: 'Jun 5, 2026', image: '/images/education-insurance.jpg', content: [
    'Education costs continue to rise faster than general inflation, making early planning far more effective than trying to catch up later.',
    'Education-specific insurance plans combine a savings component with protection, ensuring school fees are covered even if a parent\'s income is disrupted.',
    'The earlier a plan starts, the smaller the monthly contribution needed to reach the same target — compounding works in your favor over a decade or more.',
    'Reviewing the plan\'s payout schedule against your child\'s expected school stages ensures funds arrive exactly when tuition is due, not after.',
  ] },
];

export const TESTIMONIALS = [
  { name: 'Fatima Muraha', role: 'Business Owner, Nairobi', quote: 'Dipita-Insura transformed how I protect my business. Their SME plan is perfectly tailored for African entrepreneurs like me.', rating: 5 },
  { name: 'Alan Ngombe', role: 'Software Engineer, London', quote: 'As a diaspora member, finding insurance that covers my family back home was impossible — until I found Dipita-Insura. Exceptional service!', rating: 5 },
  { name: 'Gael Fana', role: 'Teacher, Douala', quote: 'The education insurance plan gives me peace of mind about my children\'s future. The premiums are affordable and the coverage is comprehensive.', rating: 5 },
  { name: 'Farhan Moise', role: 'Doctor, Abidjan', quote: 'Their health insurance network is impressive. Claims are processed quickly and the customer support team is always responsive and helpful.', rating: 5 },
];

export const PARTNERS = ['Safaricom', 'Ecobank', 'MTN Group', 'Standard Bank', 'UBA Africa'];

export const STATS = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
  { label: 'Team Members', value: 25, suffix: '+' },
  { label: 'Countries Covered', value: 15, suffix: '+' },
];

export const PAGE_ACCENTS: Record<string, string> = {
  '/': '#C9A84C',
  '/about': '#2D6A4F',
  '/services': '#1A3A5C',
  '/team': '#C05621',
  '/blog': '#065F73',
  '/quote': '#7C3D12',
  '/contact': '#1E3A5F',
};

// Service detail pages use purple
export const SERVICE_DETAIL_ACCENT = '#7B3F8C';
