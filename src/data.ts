import { Service, TeamMember, BlogPost, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    slug: "health",
    icon: "🏥",
    title: "Health Insurance",
    shortDesc: "Comprehensive health coverage for you and your family, both in Africa and for the global diaspora.",
    fullDesc: "Your health is your most valuable asset. At Dipita-Insura, we offer comprehensive health insurance plans that provide access to quality healthcare whether you are at home in Africa or living abroad as part of the diaspora. Our flexible pay-as-you-go model means you only pay for what you need.",
    features: [
      "Hospital coverage",
      "Outpatient care",
      "Prescription medicines",
      "Emergency evacuation",
      "Family plans",
      "International coverage"
    ],
    pricingTiers: [
      {
        name: "Standard Plan",
        price: "$29",
        period: "month",
        features: ["Local clinic access", "Standard hospital ward", "Selected prescription coverage", "24/7 customer helpline"]
      },
      {
        name: "Premium Plan",
        price: "$59",
        period: "month",
        features: ["All clinic access", "Private hospital room", "Full prescription coverage", "Specialist consultations", "Emergency transport"]
      },
      {
        name: "Diaspora Family Care",
        price: "$99",
        period: "month",
        features: ["International medical evacuation", "Global specialist coverage", "Comprehensive cover for relatives in Africa", "Multi-country health pass"]
      }
    ],
    faq: [
      {
        question: "How do I make a claim under the health plan?",
        answer: "You can make a claim instantly online through our digital portal or by contacting your dedicated client manager. We process claims within 24 hours."
      },
      {
        question: "Does this plan cover my parents back home in Africa?",
        answer: "Yes, our Diaspora Family Care plan is designed specifically to allow Africans living abroad to secure premium healthcare coverage for their relatives back home."
      },
      {
        question: "What clinics are included in the network?",
        answer: "We partner with over 500 top-tier hospitals and clinics across West, East, and South Africa to ensure you receive quality attention."
      }
    ]
  },
  {
    slug: "life",
    icon: "🛡️",
    title: "Life Insurance",
    shortDesc: "Secure your family future and build lasting peace of mind with tailored life coverage plans.",
    fullDesc: "Secure Your Family Future No Matter Where Life Takes You. Life is unpredictable, but your family future does not have to be. Our affordable life insurance plans provide financial security for middle-class families and Africans in the diaspora. Flexible payment options and easy online management.",
    features: [
      "Term life coverage",
      "Whole life plans",
      "Family protection",
      "Diaspora-specific plans",
      "Easy claims process",
      "Online management"
    ],
    pricingTiers: [
      {
        name: "Basic Protector",
        price: "$15",
        period: "month",
        features: ["Fixed term payout", "Funeral expense acceleration", "Standard support", "Simple medical screening"]
      },
      {
        name: "Core Family",
        price: "$35",
        period: "month",
        features: ["Extended term coverage", "Critical illness booster", "Education support grant for kids", "Direct beneficiary payouts"]
      },
      {
        name: "Global Diaspora",
        price: "$65",
        period: "month",
        features: ["Lifetime whole cover", "Cross-border estate management", "Repatriation coverage", "Premium lock guarantees"]
      }
    ],
    faq: [
      {
        question: "What is the difference between term and whole life plans?",
        answer: "Term life covers you for a set number of years, ideal for protecting specific needs. Whole life covers your entire life and accumulates a secure cash value."
      },
      {
        question: "Can I manage beneficiaries from outside the continent?",
        answer: "Absolutely. Our secure online client portal allows you to manage and update beneficiary details instantly from anywhere in the world."
      }
    ]
  },
  {
    slug: "auto",
    icon: "🚗",
    title: "Auto Insurance",
    shortDesc: "Stay safe and covered on every road with affordable, comprehensive car insurance.",
    fullDesc: "Affordable Auto Insurance for Your Journey Wherever Life Takes You. We understand that your car is more than just a vehicle. Our auto insurance plans offer comprehensive coverage at affordable premiums with roadside assistance across Africa.",
    features: [
      "Comprehensive coverage",
      "Third party liability",
      "Roadside assistance",
      "Accident claims",
      "No-claims bonus",
      "Multi-vehicle discount"
    ],
    pricingTiers: [
      {
        name: "Basic Third Party",
        price: "$10",
        period: "month",
        features: ["Third party bodily injury", "Property damage liability", "Basic roadside towing", "Legal protection"]
      },
      {
        name: "Roadside Premium",
        price: "$25",
        period: "month",
        features: ["Collision damage coverage", "Theft and fire shield", "Extended emergency towing", "Rental vehicle allowance"]
      },
      {
        name: "Full Comprehensive",
        price: "$45",
        period: "month",
        features: ["All-inclusive coverage", "No-claims bonus protection", "24/7 rapid medical assistance", "Multi-country coverage in regional trade blocks"]
      }
    ],
    faq: [
      {
        question: "How fast is roadside assistance dispatched?",
        answer: "We have rapid response vehicles stationed in major African metropolitan centers, boasting an average response time of under 30 minutes."
      },
      {
        question: "Does my policy cover me across regional borders?",
        answer: "Yes, our Full Comprehensive plan covers travel across borders within East and West African regional blocks."
      }
    ]
  },
  {
    slug: "business",
    icon: "🏢",
    title: "Business Insurance",
    shortDesc: "Protect your enterprise, mitigate risks, and scale safely with dynamic business shields.",
    fullDesc: "Protect Your Business and Keep Growing. Starting or running a business comes with risks. Our tailored business insurance provides coverage that scales with your business at a fraction of traditional costs. Pay-as-you-go means you can scale as you grow.",
    features: [
      "Property coverage",
      "Liability protection",
      "Employee coverage",
      "Business interruption",
      "Equipment insurance",
      "Flexible premiums"
    ],
    pricingTiers: [
      {
        name: "Micro-SME",
        price: "$30",
        period: "month",
        features: ["Retail property shield", "General public liability", "Basic asset protection", "Up to 5 employees"]
      },
      {
        name: "Growing Enterprise",
        price: "$75",
        period: "month",
        features: ["Full property & content cover", "Employee medical booster", "Business interruption coverage", "Up to 25 employees"]
      },
      {
        name: "Corporate Shield",
        price: "$150",
        period: "month",
        features: ["Global supply chain protection", "Director liability cover", "Cyber risk assurance", "Unlimited scaling capacity"]
      }
    ],
    faq: [
      {
        question: "What is business interruption coverage?",
        answer: "If unexpected disasters like fires or water damage halt your operations, we cover your lost profits and overhead expenses while you rebuild."
      },
      {
        question: "Can I adjust my premium as my business fluctuates?",
        answer: "Yes, we are proud to offer pioneering pay-as-you-go commercial coverage tailored to seasonal changes in your enterprise."
      }
    ]
  },
  {
    slug: "education",
    icon: "🎓",
    title: "Education Insurance",
    shortDesc: "Guarantee your children education expenses and secure their academic journey.",
    fullDesc: "Invest in Your Children Future Today. Education is the greatest gift you can give your children. Our education insurance ensures that no matter what happens, your children education will be secured and funded.",
    features: [
      "Tuition fee coverage",
      "School fees protection",
      "Study abroad coverage",
      "Scholarship supplements",
      "Exam fee coverage",
      "University coverage"
    ],
    pricingTiers: [
      {
        name: "Primary Secure",
        price: "$20",
        period: "month",
        features: ["Local school fee safety net", "Primary textbook allowances", "Basic scholarship supplements"]
      },
      {
        name: "Secondary Pillar",
        price: "$45",
        period: "month",
        features: ["High school tuition coverage", "Boarding school fees support", "Exam prep registration fees"]
      },
      {
        name: "Global Scholar",
        price: "$85",
        period: "month",
        features: ["International university fund", "Study abroad flights cover", "Living expenses stipend support", "Multi-child savings compound"]
      }
    ],
    faq: [
      {
        question: "How does the school fee payment work if a claim is active?",
        answer: "Dipita Insura pays the school directly to prevent any interruption to your child classes and ensure full compliance."
      },
      {
        question: "Can this fund be used for university abroad?",
        answer: "Yes, our Global Scholar plan is built specifically to fund and secure academic placements in North America, Europe, or top African institutions."
      }
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Laito French",
    role: "Founder and CEO",
    description: "Insurance expert with 15 years experience designing creative financial risk solutions across emerging markets.",
    initials: "LF",
    bgClass: "bg-navy text-white",
    social: { linkedin: "#", twitter: "#", facebook: "#" }
  },
  {
    name: "Adam Ivan",
    role: "Chief Advisor",
    description: "Financial planning specialist with extensive expertise in diaspora investment strategies and legacy protection.",
    initials: "AI",
    bgClass: "bg-gold text-navy",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Rebecca Leo",
    role: "Web Designer",
    description: "Digital transformation lead dedicated to crafting smooth, secure, and clear customer experiences on our web platforms.",
    initials: "RL",
    bgClass: "bg-green text-white",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    name: "Donald John",
    role: "Executive Manager",
    description: "Operations expert focusing on building trusting client relationships and rapid claims processing times.",
    initials: "DJ",
    bgClass: "bg-teal-600 text-white",
    social: { linkedin: "#", twitter: "#", facebook: "#" }
  },
  {
    name: "Iven Rocky",
    role: "Web Developer",
    description: "Technology and systems developer ensuring safe data storage, secure client payments, and rapid bot integrations.",
    initials: "IR",
    bgClass: "bg-purple-600 text-white",
    social: { linkedin: "#" }
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "blog-1",
    category: "Family Health",
    date: "June 28, 2026",
    title: "5 Reasons Every African Family Needs Health Insurance in 2025",
    excerpt: "Protecting your family health is crucial in todays fast-changing world. Discover why comprehensive medical coverage is the smart financial decision.",
    content: "Your health is your most valuable asset. Learn how Dipitas custom family medical plans provide secure clinic access, protect you from catastrophic medical expenses, and give your family peace of mind.",
    bgGradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "blog-2",
    category: "Financial Tips",
    date: "June 15, 2026",
    title: "How Pay-As-You-Go Insurance Works for Africa Middle Class",
    excerpt: "Flexibility is key to financial success. Explore how modern pay-as-you-go insurance models are changing the landscape for middle-class professionals.",
    content: "Discover how we built flexible monthly payment structures that align with your actual income streams. Pay-as-you-go coverage means you are never locked into long-term structures that dont fit your life.",
    bgGradient: "from-amber-500 to-orange-600"
  },
  {
    id: "blog-3",
    category: "Entrepreneurship",
    date: "May 30, 2026",
    title: "Protecting Your Business: Insurance Guide for African Entrepreneurs",
    excerpt: "Starting an enterprise is a proud milestone. Learn how custom commercial coverage helps safeguard your investments and keep your business scaling.",
    content: "From general liability to property protection and business interruption coverage, we break down the necessary security shields every small and medium enterprise needs to succeed safely.",
    bgGradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "blog-4",
    category: "Diaspora Insights",
    date: "May 12, 2026",
    title: "Life Insurance for the African Diaspora: What You Need to Know",
    excerpt: "Supporting family from abroad is a major responsibility. Discover life coverage policies that secure the legacy of your relatives back home.",
    content: "As a member of the diaspora, you want to ensure your loved ones back home remain financially secure. Our global policies offer simple cross-border payment structures and secure beneficiary payouts.",
    bgGradient: "from-purple-500 to-pink-600"
  },
  {
    id: "blog-5",
    category: "Auto Care",
    date: "April 24, 2026",
    title: "Auto Insurance Tips for African Drivers",
    excerpt: "Driving on bustling roads requires confidence. Find out how to select the right comprehensive plan and make claims processes simple.",
    content: "Whether dealing with minor scratches or major collisions, having rapid roadside assistance and a trusted insurer makes all the difference. Read our key tips on minimizing claims processing times.",
    bgGradient: "from-red-500 to-rose-600"
  },
  {
    id: "blog-6",
    category: "Education",
    date: "April 05, 2026",
    title: "Education Insurance: Securing Your Children Future",
    excerpt: "Securing your childrens schooling guarantees they get the best opportunities. Learn about study fee safety nets designed for middle class budgets.",
    content: "Education is the greatest legacy we can leave. Our plans guarantee that in any circumstance, school tuition and textbook fees are covered directly so your children educational path never gets interrupted.",
    bgGradient: "from-cyan-500 to-blue-600"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    initials: "FM",
    quote: "Securing Dipitas education plan took a heavy weight off my shoulders. I can focus on my studies knowing my university tuition fees are fully protected.",
    name: "Fatima Muraha",
    role: "University Student",
    rating: 5,
    bgClass: "bg-blue-600"
  },
  {
    initials: "AN",
    quote: "Living in the diaspora, it can be difficult to manage medical support for parents back home. This health plan allows me to pay monthly, ensuring they receive rapid, top-quality medical care.",
    name: "Alan Ngombe",
    role: "Assistant Manager",
    rating: 5,
    bgClass: "bg-emerald-600"
  },
  {
    initials: "GF",
    quote: "My startup faced sudden equipment issues last winter. Dipitas rapid claims processing resolved our business interruption loss within three business days. Outstanding service!",
    name: "Gael Fana",
    role: "Web Agency Owner",
    rating: 5,
    bgClass: "bg-amber-600"
  },
  {
    initials: "FM",
    quote: "Having roadside support and comprehensive auto cover across national borders gives me total peace of mind on my regional logistics business trips.",
    name: "Farhan Moise",
    role: "Agent Manager",
    rating: 5,
    bgClass: "bg-purple-600"
  }
];

export const PARTNER_LOGOS = [
  { name: "Safaricom Partner", text: "SAFARI" },
  { name: "Ecobank Partner", text: "ECOBANK" },
  { name: "MTN Partner", text: "MTN GROUP" },
  { name: "Standard Bank Partner", text: "STANBANK" },
  { name: "UBA Partner", text: "UBA AFRICA" }
];
