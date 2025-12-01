

import { Experience, Metric, Skill } from './types';

// Icons need to be mapped in the component, so we keep string keys here
export const TECH_STACK: Skill[] = [
  { name: "Meta Ads (FB/IG)", icon: "meta", level: 98 },
  { name: "TikTok Ads", icon: "tiktok", level: 95 },
  { name: "Google Ads", icon: "google", level: 90 },
  { name: "Snapchat Ads", icon: "snap", level: 99 },
  { name: "LinkedIn Ads", icon: "linkedin", level: 90 },
  { name: "B2B Marketing", icon: "briefcase", level: 95 },
  { name: "Copywriting", icon: "pen", level: 92 },
  { name: "Analytics", icon: "chart", level: 88 },
];

const CONTENT_EN = {
  profile: {
    name: "Achraf Najim",
    title: "Performance Marketer Specialist",
    tagline: "Helping Businesses Scale with High-Converting Ads",
    about: `I am a Digital Marketer and Performance Marketing Specialist with extensive experience in the Saudi market and paid advertising. I have strong expertise in Media Buying, Copywriting, Audience Research, and Competitor Analysis, along with advanced skills in creating high-converting ad videos and launching effective campaigns across all major platforms.
    
    I specialize in both B2B Lead Generation and B2C E-commerce growth. Over the past 5+ years, I have worked remotely with Saudi companies and Spanish agencies, managing more than $1.3M in ad spend and achieving up to 13X ROAS across multiple industries.`,
    email: "ennajihiachraf@gmail.com",
    linkedin: "https://www.linkedin.com/in/achraf-najim",
    location: "Remote Work Discipline",
    languages: [
      { name: "Arabic", level: "Proficient", percent: 95 },
      { name: "Spanish", level: "Proficient", percent: 90 },
      { name: "French", level: "Intermediate", percent: 60 },
      { name: "English", level: "Basic", percent: 30 }
    ],
    status: "Available for New Opportunities",
    resumeText: "Start Scaling Today",
    linkedInText: "LinkedIn Profile"
  },
  metrics: [
    { label: "Ad Spend Managed", value: "$1.3M+", sub: "Across Meta, TikTok, Google, LinkedIn" },
    { label: "Max ROAS Achieved", value: "13X", sub: "Return on Ad Spend" },
    { label: "Experience", value: "5+ Years", sub: "Remote & International" },
    { label: "Industries", value: "6+", sub: "E-com, B2B, SaaS, Real Estate" },
  ] as Metric[],
  experience: [
    {
      company: "COD NETWORK",
      role: "Marketing Partner – Performance Marketing & Media Buying",
      period: "Jan 2022 - Present",
      location: "Saudi Arabia · Remote",
      description: `Worked as a marketing partner full-funnel performance marketing activities. Managed paid advertising campaigns, created high-converting ad videos, wrote direct-response copy, optimized landing pages, improved CPL/ROAS, Handled audience research, competitor analysis, strategic decision-making, and end-to-end campaign management across Meta, TikTok, Snapchat, Google, and LinkedIn.\n\nCollaborated with the company as a long-term partner, supporting growth, scaling campaigns, and achieving measurable revenue results.`,
      skills: ["UGC Ad Scripting", "Media Buying", "Strategy", "Multi-Platform Ads", "LinkedIn Ads"]
    },
    {
      company: "Freelance",
      role: "Performance Marketing Specialist",
      period: "Apr 2021 - Present",
      location: "Remote",
      description: `As a Freelance Performance Marketing Specialist helping brands and agencies grow through data-driven advertising and high-converting creative strategies. I manage paid campaigns across Meta, TikTok, Snapchat, Google, and LinkedIn, focusing on lowering costs and maximizing ROAS.\n\nI work remotely with brands and marketing agencies, building full funnel strategies, writing direct-response copy, analyzing audiences, and optimizing campaigns to achieve real, measurable results.`,
      skills: ["Performance Marketing", "Media Buying", "B2B Lead Gen", "Full Funnel Strategy", "Copywriting"]
    },
    {
      company: "Nextage LLC",
      role: "Digital Marketing Specialist – YouTube Ads Lead",
      period: "Mar 2024 - Oct 2025",
      location: "Remote",
      description: `At Nextage LLC, I worked as the primary specialist responsible for YouTube Ads strategy and execution. My role centered on managing the full advertising cycle from creative concept to final reporting while also supporting the team in Snapchat and Meta campaigns when needed.

Key Responsibilities:
• Led and managed YouTube Ads campaigns end-to-end.
• Wrote high-performing ad scripts, including hooks, body copy, and CTAs.
• Created and tested multiple ad variations to improve CTR and conversion rates.
• Analyzed performance data and delivered weekly reports with clear insights and recommendations.
• Collaborated with the team to brainstorm new creative angles and content ideas.
• Optimized campaigns continuously to lower CPA and increase ROAS.
• Conducted competitive research and audience analysis to refine targeting.
• Supported the team with Snapchat and Meta Ads when required.`,
      skills: ["YouTube Ads", "Video Advertising", "Script Writing", "Analytics"]
    },
    {
      company: "HY Retail",
      role: "Marketing Partner – Performance Marketing & Media Buying",
      period: "Sep 2020 - May 2023",
      location: "Saudi Arabia · Remote",
      description: `Worked as an external marketing partner for HY Retail, managing full-funnel performance marketing for all products in the Saudi market.
Responsible for launching and optimizing paid advertising campaigns across Meta, TikTok, Snapchat, Google, and LinkedIn.
Created high-converting ad creatives and direct-response copy to increase conversions and reduce acquisition costs.
Handled analytics, audience research, competitor analysis, and performance reporting.
Improved ROAS through continuous campaign optimization and strategic testing.`,
      skills: ["Ad Creative Strategy", "Direct-Response Copywriting", "E-commerce", "Scaling", "LinkedIn Ads"]
    }
  ] as Experience[],
  services: {
    title: "What I Bring to the Table",
    platformTitle: "Platform Mastery",
    whyHireTitle: "The Strategic Advantage",
    whyHireDesc: "I offer senior-level expertise with the agility of a dedicated partner. Whether you are a brand owner or an agency needing white-label support, I integrate seamlessly to drive efficiency, speed, and higher profitability.",
    cards: [
      {
        title: "Media Buying",
        desc: "Expert management of Meta, TikTok, Snapchat, Google & LinkedIn ads to maximize ROI for B2B & B2C."
      },
      {
        title: "Direct-Response Copy",
        desc: "Persuasive ad copy designed to trigger psychological buying triggers."
      },
      {
        title: "Video Creative Strategy",
        desc: "Planning high-converting UGC and video ads that stop the scroll."
      },
      {
        title: "Scaling Strategy",
        desc: "From testing phase to aggressive scaling while maintaining profitability."
      },
      {
        title: "Multi-Market Expertise",
        desc: "Specialized in Saudi (GCC) & European markets. Fluent in 4 languages."
      },
      {
        title: "Data Analytics",
        desc: "Deep analysis of metrics to cut waste and double down on winners."
      }
    ]
  },
  ecommerce: {
    title: "E-commerce Scaling & Brand Growth",
    subtitle: "From 5-Figures to 7-Figures: The Profit-First Approach",
    description: "I don't just run ads; I build profitable acquisition systems. My core expertise lies in scaling E-commerce brands by combining direct-response psychology with algorithmic media buying. I treat your ad budget like my own, focusing on Net Profit, not just vanity metrics.",
    features: [
      {
        title: "Creative Strategy First",
        desc: "The algorithm is the creative. I script and strategize high-converting UGC and video ads that hook audiences instantly."
      },
      {
        title: "Multi-Channel Domination",
        desc: "Scaling winning offers horizontally across Meta, TikTok, and Snapchat to reach your customers wherever they are."
      },
      {
        title: "Full-Funnel Optimization",
        desc: "Optimizing the entire journey: from the Ad Hook -> CTR -> Landing Page -> Add to Cart -> Purchase -> Retention."
      }
    ],
    cta: "Scale Your Store"
  },
  b2b: {
    title: "B2B Growth & Lead Generation",
    subtitle: "Strategic Lead Gen for Services & Industrial Products",
    description: "Generating qualified leads for B2B businesses requires a strategic approach focused on trust and authority. I specialize in capturing high-quality leads for service providers and industrial suppliers, ensuring your sales team talks to decision-makers, not gatekeepers.",
    industries: [
      { 
        name: "Industrial Products", 
        desc: "Heavy equipment, manufacturing supplies, and wholesale distribution." 
      },
      { 
        name: "Corporate Services", 
        desc: "HR, Accounting, Legal Consulting, and specialized advisory services." 
      },
      { 
        name: "SaaS & Tech", 
        desc: "Enterprise software solutions and technology platforms." 
      }
    ],
    cta: "Discuss Your B2B Strategy"
  },
  remoteWork: {
    title: "Remote Work Mastery",
    subtitle: "Seamless Collaboration, Anywhere in the World",
    description: "Working remotely requires more than just an internet connection; it demands discipline, proactive communication, and mastery of collaboration tools. I have been working remotely for 5+ years, ensuring projects move forward without friction, regardless of time zones.",
    tools: [
        { category: "Communication", items: ["Slack", "Zoom", "Google Meet", "Discord", "Loom"] },
        { category: "Project Management", items: ["Asana", "Trello", "Jira", "Notion", "ClickUp"] },
        { category: "Productivity", items: ["Google Workspace", "Microsoft 365", "Zapier", "Drive"] }
    ],
    stats: [
        { label: "Response Time", value: "< 15 mins", percent: 98 },
        { label: "Task Deadline Met", value: "99%", percent: 99 },
        { label: "Meeting Attendance", value: "100%", percent: 100 }
    ]
  },
  nav: {
    about: "About",
    experience: "Experience",
    services: "Services",
    tools: "Free Tools",
    contact: "Contact",
    hire: "Hire Me"
  },
  hero: {
    titlePrefix: "Scale Your Business with",
    titleHighlight: "High-ROI",
    titleSuffix: "Ads",
    desc: "I am Achraf Najim, a Performance Marketing Specialist with extensive expertise in B2B Lead Generation and B2C E-commerce growth. Managing over $1.3M in ad spend, I help brands in the Saudi market and beyond achieve up to 13X ROAS through data-driven strategies."
  },
  contact: {
    title: "Ready to Scale Your Ads?",
    subtitle: "I am currently accepting new clients for Q1/Q2. If you are ready to move from burning budget to generating profit, let's talk.",
    emailBtn: "Send me an Email",
    linkedinBtn: "Connect on LinkedIn",
    whatsappBtn: "Chat on WhatsApp",
    infoTitle: "Contact Info",
    langTitle: "Languages",
    builtBy: "Developed by Achraf Najim"
  },
  tools: {
    title: "Free AI Marketing Tools",
    sectionDesc: "I have built these free tools to help you streamline your marketing efforts. Read below to understand how they work, then try them out.",
    sectionTitle: "What are these tools?",
    explanations: [
      {
        title: "Hook Generator",
        desc: "The 'Hook' is the first 3 seconds of your ad or headline. It's the most critical part. This tool uses AI to write psychological triggers that stop the scroll and get attention."
      },
      {
        title: "Profitability Calculator",
        desc: "Never run ads blindly. This calculator tells you exactly what your Max CPA (Cost Per Acquisition) is and the Minimum ROAS you need to not lose money."
      },
      {
        title: "AI Marketing Consultant",
        desc: "A smart assistant trained on marketing strategies. Use it to ask quick questions about terms like CTR, CPM, or get general advice on strategy."
      }
    ],
    tryIt: "Try The Tools Below",
    hookTitle: "Expert Hook Generator",
    hookDesc: "Generate sales-optimized hooks based on deep customer psychology.",
    chatTitle: "AI Marketing Expert",
    chatDesc: "Ask me anything about scaling, CTR, CPA, or strategy.",
    inputPlaceholder: "Enter your product or topic (e.g., 'Anti-aging cream')",
    vegetal: "Vegetal Marketing",
    general: "General Marketing",
    generate: "Generate Hooks",
    chatPlaceholder: "How do I lower my CPA?",
    chatSend: "Ask Expert",
    inputs: {
        product: "Product/Service Type",
        audience: "Target Audience",
        pain: "Main Pain Point",
        result: "Desired Result",
        usp: "Unique Selling Proposition (Difference)"
    },
    calculator: {
        title: "Profitability Calculator",
        subtitle: "Know your numbers before you spend a dollar.",
        priceLabel: "Selling Price ($)",
        costLabel: "Product Cost (COGS + Shipping) ($)",
        maxCPA: "Max Tolerable CPA",
        minROAS: "Min Break-even ROAS",
        explanationTitle: "Why is this important?",
        whatIsCPA: "What is CPA (Cost Per Acquisition)?",
        cpaDesc: "It's the amount you pay in ads to get one customer. Your Max CPA is simply your profit margin. If you pay more than this, you lose money.",
        whatIsROI: "What is Min ROI/ROAS?",
        roiDesc: "This is the minimum return you need to break even. If your ROAS is below this number, your ads are unprofitable.",
        exampleTitle: "Example:",
        exampleText: "If you sell a product for $100 and it costs you $40 (Goods + Shipping), your margin is $60. This means your Max CPA is $60. If you spend $61 to get a sale, you lost money. Your Break-even ROAS would be 1.66 (100/60)."
    }
  }
};

const CONTENT_AR = {
  profile: {
    name: "أشرف نجيم",
    title: "خبير تسويق الأداء (Performance Marketer)",
    tagline: "مساعدة الشركات على التوسع وزيادة الأرباح عبر إعلانات عالية التحويل",
    about: `أنا مسوق رقمي وخبير في تسويق الأداء (Performance Marketing)، أمتلك خبرة واسعة في السوق السعودي والإعلانات المدفوعة. لدي مهارات متقدمة في شراء الوسائط الإعلانية (Media Buying)، وصياغة النصوص الإعلانية (Copywriting)، وبحث الجمهور، وتحليل المنافسين، بالإضافة إلى قدرة عالية على ابتكار فيديوهات إعلانية تحقق معدلات تحويل مرتفعة، وإطلاق حملات فعالة عبر جميع المنصات الرئيسية.
    
    أمتلك خبرة متخصصة في تسويق الشركات (B2B) وتوليد العملاء المحتملين (Lead Gen)، إلى جانب تسويق التجارة الإلكترونية (B2C). على مدار أكثر من 5 سنوات، عملت عن بُعد مع شركات سعودية ووكالات إسبانية، حيث أدرت ميزانيات إعلانية تجاوزت 1.3 مليون دولار، وحققت عائدًا على الإنفاق الإعلاني (ROAS) يصل إلى 13 ضعفًا.`,
    email: "ennajihiachraf@gmail.com",
    linkedin: "https://www.linkedin.com/in/achraf-najim",
    location: "عمل عن بُعد (Remote Work Discipline)",
    languages: [
      { name: "العربية", level: "جيد", percent: 95 },
      { name: "الإسبانية", level: "جيد", percent: 90 },
      { name: "الفرنسية", level: "متوسط", percent: 60 },
      { name: "الإنجليزية", level: "ضعيف", percent: 30 }
    ],
    status: "متاح لفرص جديدة",
    resumeText: "ابدأ بتوسيع أعمالك",
    linkedInText: "زيارة LinkedIn"
  },
  metrics: [
    { label: "ميزانية إعلانية مُدارة", value: "+$1.3M", sub: "عبر Meta، TikTok، Google، LinkedIn" },
    { label: "أعلى عائد (ROAS)", value: "13X", sub: "عائد على الإنفاق الإعلاني" },
    { label: "الخبرة المهنية", value: "+5 سنوات", sub: "عمل دولي وعن بُعد" },
    { label: "المجالات", value: "+6", sub: "تجارة إلكترونية، شركات (B2B)، عقارات" },
  ] as Metric[],
  experience: [
    {
      company: "COD NETWORK",
      role: "شريك تسويقي – تسويق الأداء وشراء الوسائط",
      period: "يناير 2022 - الآن",
      location: "المملكة العربية السعودية · عن بُعد",
      description: `عملت كشريك تسويقي لإدارة أنشطة تسويق الأداء بشكل متكامل (Full-Funnel). قمت بإدارة الحملات الإعلانية المدفوعة، وإنشاء فيديوهات إعلانية عالية التحويل، وكتابة نصوص إعلانية ذات استجابة مباشرة، وتحسين صفحات الهبوط لزيادة معدلات التحويل.
      
      شملت مسؤولياتي أيضًا:
      • تحسين تكلفة العميل المحتمل (CPL) وتعظيم العائد على الإنفاق (ROAS).
      • إجراء أبحاث معمقة للجمهور وتحليل المنافسين.
      • اتخاذ القرارات الاستراتيجية وإدارة الحملات من الألف إلى الياء عبر منصات Meta وTikTok وSnapchat وGoogle وLinkedIn.

      تعاونت مع الشركة كشريك استراتيجي طويل الأمد، مما ساهم في نمو الأعمال وتوسيع نطاق الحملات وتحقيق نتائج مالية ملموسة.`,
      skills: ["شراء الوسائط (Media Buying)", "كتابة نصوص UGC", "التخطيط الاستراتيجي", "إعلانات متعددة المنصات", "LinkedIn Ads"]
    },
    {
      company: "مستقل (Freelance)",
      role: "أخصائي تسويق الأداء",
      period: "أبريل 2021 - الآن",
      location: "عن بُعد",
      description: `بصفتي أخصائي مستقل في تسويق الأداء، أساعد العلامات التجارية والوكالات على تحقيق النمو من خلال الإعلانات المستندة إلى البيانات واستراتيجيات إبداعية عالية التأثير.
      
      أدير الحملات المدفوعة عبر Meta وTikTok وSnapchat وGoogle وLinkedIn، مع التركيز الصارم على خفض التكاليف وتعظيم العائد على الاستثمار (ROAS).
      
      أعمل عن بُعد مع علامات تجارية ووكالات تسويق لبناء استراتيجيات قمع تسويقي متكاملة (Full Funnel)، وكتابة نصوص إعلانية مقنعة، وتحليل شرائح الجمهور، وتوليد عملاء محتملين للشركات (B2B)، وتحسين الحملات بشكل مستمر لتحقيق نتائج حقيقية وقابلة للقياس.`,
      skills: ["تسويق الأداء", "تسويق الشركات (B2B)", "استراتيجيات الـ Funnel", "صياغة المحتوى الإعلاني"]
    },
    {
      company: "Nextage LLC",
      role: "أخصائي تسويق رقمي – مسؤول إعلانات يوتيوب",
      period: "مارس 2024 - أكتوبر 2025",
      location: "عن بُعد",
      description: `في Nextage LLC، عملت كالأخصائي الرئيسي المسؤول عن استراتيجية وتنفيذ إعلانات YouTube. تمحور دوري حول إدارة الدورة الإعلانية الكاملة، بدءًا من المفهوم الإبداعي وصولًا إلى التقارير النهائية، مع تقديم الدعم للفريق في حملات Snapchat وMeta عند الحاجة.

      المسؤوليات الرئيسية:
      • قيادة وإدارة حملات إعلانات YouTube بشكل كامل.
      • كتابة نصوص إعلانية عالية الأداء (Hooks، المحتوى الأساسي، الدعوة لاتخاذ إجراء CTA).
      • ابتكار واختبار تنويعات متعددة للإعلانات لتحسين نسبة النقر (CTR) ومعدلات التحويل.
      • تحليل بيانات الأداء وتقديم تقارير أسبوعية تتضمن رؤى دقيقة وتوصيات عملية.
      • التعاون مع الفريق لتطوير زوايا إبداعية وأفكار محتوى جديدة.
      • التحسين المستمر للحملات لتقليل تكلفة الاستحواذ (CPA) وزيادة العائد (ROAS).
      • إجراء بحوث تنافسية وتحليل الجمهور لتحسين دقة الاستهداف.`,
      skills: ["إعلانات يوتيوب", "إعلانات الفيديو", "كتابة السيناريو الإعلاني", "تحليل البيانات"]
    },
    {
      company: "HY Retail",
      role: "شريك تسويقي – تسويق الأداء وشراء الوسائط",
      period: "سبتمبر 2020 - مايو 2023",
      location: "المملكة العربية السعودية · عن بُعد",
      description: `عملت كشريك تسويقي خارجي لشركة HY Retail، حيث توليت إدارة تسويق الأداء لجميع المنتجات في السوق السعودي.
      
      • مسؤول عن إطلاق وتحسين الحملات الإعلانية المدفوعة عبر Meta وTikTok وSnapchat وGoogle وLinkedIn.
      • تصميم إعلانات إبداعية عالية التحويل وكتابة نصوص استجابة مباشرة لزيادة المبيعات وتقليل تكاليف الاستحواذ.
      • إدارة التحليلات، وبحث الجمهور، وتحليل المنافسين، وإعداد تقارير الأداء.
      • تحسين العائد على الإنفاق الإعلاني (ROAS) من خلال الاختبار الاستراتيجي والتحسين المستمر.`,
      skills: ["استراتيجية الإعلانات", "نصوص الاستجابة المباشرة", "التجارة الإلكترونية", "توسيع الحملات (Scaling)", "LinkedIn Ads"]
    },
  ] as Experience[],
  services: {
    title: "ما القيمة التي أضيفها لك؟",
    platformTitle: "التمكن من المنصات",
    whyHireTitle: "ميزة الشراكة الاستراتيجية",
    whyHireDesc: "أقدم خبرة متقدمة بمرونة عالية، بعيداً عن التعقيدات التقليدية. سواء كنت صاحب علامة تجارية أو وكالة تبحث عن دعم متخصص، أعمل كشريك مباشر لضمان سرعة التنفيذ، كفاءة الإنفاق، وتعظيم الأرباح.",
    cards: [
      {
        title: "شراء الوسائط (Media Buying)",
        desc: "إدارة احترافية لإعلانات Meta وTikTok وSnapchat وGoogle وLinkedIn لتحقيق أقصى عائد للشركات (B2B) والمتاجر (B2C)."
      },
      {
        title: "نصوص الاستجابة المباشرة",
        desc: "نصوص إعلانية مقنعة مصممة خصيصًا لتحفيز دوافع الشراء النفسية لدى العميل."
      },
      {
        title: "استراتيجية الفيديو الإبداعية",
        desc: "تخطيط إعلانات UGC وفيديوهات توقف التصفح وتجذب الانتباه فورًا."
      },
      {
        title: "استراتيجية التوسع (Scaling)",
        desc: "الانتقال المدروس من مرحلة الاختبار إلى مرحلة التوسع القوي مع الحفاظ على الربحية."
      },
      {
        title: "خبرة في أسواق متعددة",
        desc: "تخصص في السوق السعودي (الخليج) والأسواق الأوروبية. أتحدث 4 لغات بطلاقة."
      },
      {
        title: "تحليل البيانات",
        desc: "تحليل عميق للمؤشرات لتقليل الهدر المالي والتركيز على الحملات الرابحة."
      }
    ]
  },
  ecommerce: {
    title: "توسيع المتاجر الإلكترونية (E-commerce Scaling)",
    subtitle: "من أرقام متواضعة إلى مبيعات قياسية: نهج الربحية أولًا",
    description: "لا أكتفي بإطلاق الإعلانات فقط؛ بل أبني منظومات ربحية متكاملة لجلب العملاء. تكمن قوتي الأساسية في توسيع العلامات التجارية والمتاجر الإلكترونية من خلال دمج علم النفس التسويقي (Direct Response) مع خوارزميات المنصات الإعلانية. أعامل ميزانيتك كأنها مالي الخاص، مع التركيز على الربح الصافي، وليس فقط أرقام العائد الظاهرية.",
    features: [
      {
        title: "المحتوى الإبداعي هو الملك",
        desc: "في عصر الخوارزميات، الإبداع هو الاستهداف. أكتب وأخطط لإعلانات فيديو و UGC تجذب الانتباه وتتغلب على ظاهرة 'تجاهل الإعلانات'."
      },
      {
        title: "الهيمنة متعددة المنصات",
        desc: "توسيع العروض الرابحة أفقيًا عبر Meta وTikTok وSnapchat للوصول إلى عملائك أينما كانوا."
      },
      {
        title: "تحسين القمع التسويقي بالكامل",
        desc: "تحسين الرحلة كاملة: من خطاف الإعلان -> نسبة النقر (CTR) -> صفحة الهبوط -> الإضافة للسلة -> الشراء -> وتكرار الشراء."
      }
    ],
    cta: "ضخّم مبيعات متجرك"
  },
  b2b: {
    title: "تنمية أعمال الشركات (B2B) وتوليد العملاء",
    subtitle: "استراتيجيات توليد العملاء للخدمات والمنتجات الصناعية",
    description: "يتطلب توليد عملاء محتملين للشركات (B2B) نهجًا استراتيجيًا يركز على الثقة والمصداقية. أنا متخصص في جلب عملاء محتملين مؤهلين لمزودي الخدمات والمنتجات الصناعية، مما يضمن لفريق مبيعاتك التواصل مع صناع القرار مباشرة.",
    industries: [
      { 
        name: "المنتجات الصناعية", 
        desc: "المعدات الثقيلة، مستلزمات التصنيع، وتوزيع الجملة." 
      },
      { 
        name: "خدمات الشركات", 
        desc: "الموارد البشرية، المحاسبة، الاستشارات القانونية، والخدمات الاستشارية المتخصصة." 
      },
      { 
        name: "التقنية والبرمجيات", 
        desc: "حلول البرمجيات للمؤسسات والمنصات التقنية." 
      }
    ],
    cta: "ناقش استراتيجية B2B"
  },
  remoteWork: {
    title: "احتراف العمل عن بُعد",
    subtitle: "تعاون سلس، ونتائج مضمونة من أي مكان",
    description: "العمل عن بُعد يتطلب انضباطاً عالياً وتواصلاً استباقياً، وإتقان لأدوات التعاون الرقمي. لدي خبرة تزيد عن 5 سنوات في العمل مع فرق دولية، مما يضمن سير المشاريع بسلاسة وكأننا في نفس المكتب، بغض النظر عن فارق التوقيت.",
    tools: [
        { category: "التواصل الفوري", items: ["Slack", "Zoom", "Google Meet", "Discord", "Loom"] },
        { category: "إدارة المهام والمشاريع", items: ["Asana", "Trello", "Jira", "Notion", "ClickUp"] },
        { category: "الإنتاجية والمستندات", items: ["Google Workspace", "Microsoft 365", "Zapier", "Drive"] }
    ],
    stats: [
        { label: "سرعة الاستجابة", value: "< 15 دقيقة", percent: 98 },
        { label: "تسليم المهام في الموعد", value: "99%", percent: 99 },
        { label: "حضور الاجتماعات", value: "100%", percent: 100 }
    ]
  },
  nav: {
    about: "نبذة عني",
    experience: "الخبرات",
    services: "خدماتي",
    tools: "أدوات مجانية",
    contact: "تواصل معي",
    hire: "وظفني"
  },
  hero: {
    titlePrefix: "ضاعف نمو أعمالك باستخدام",
    titleHighlight: "إعلانات عالية العائد",
    titleSuffix: "",
    desc: "أنا أشرف نجيم، مختص في تسويق الأداء (Performance Marketing) بخبرة واسعة في تسويق الشركات (B2B) ونمو التجارة الإلكترونية (B2C). أدرت ميزانيات إعلانية تتجاوز 1.3 مليون دولار، وساعدت علامات تجارية في السوق السعودي وخارجه على تحقيق عائد يصل إلى 13X من خلال استراتيجيات مبنية على البيانات."
  },
  contact: {
    title: "هل أنت مستعد لمضاعفة مبيعاتك؟",
    subtitle: "أنا متاح حاليًا لاستقبال عملاء جدد للربع الحالي. إذا كنت مستعدًا للانتقال من مرحلة هدر الميزانية إلى مرحلة جني الأرباح، فلنتحدث.",
    emailBtn: "راسلني عبر البريد",
    linkedinBtn: "تواصل عبر LinkedIn",
    whatsappBtn: "محادثة واتساب",
    infoTitle: "بيانات التواصل",
    langTitle: "اللغات",
    builtBy: "مُطوَّر بواسطة Achraf Najim"
  },
  tools: {
    title: "أدوات تسويق مجانية",
    sectionDesc: "لقد قمت ببناء هذه الأدوات المجانية لمساعدتك في تبسيط جهودك التسويقية. اقرأ أدناه لتفهم كيف تعمل كل أداة، ثم جربها بنفسك.",
    sectionTitle: "ما هي هذه الأدوات؟",
    explanations: [
      {
        title: "مولد العناوين الجذابة (Hooks)",
        desc: "الـ Hook هو أول 3 ثوانٍ من إعلانك أو العنوان الرئيسي. هذه الأداة تستخدم الذكاء الاصطناعي لكتابة محفزات نفسية توقف العميل عن التمرير وتجذب انتباهه."
      },
      {
        title: "حاسبة الربحية",
        desc: "لا تطلق الإعلانات بشكل أعمى. هذه الحاسبة تخبرك بالضبط بأعلى تكلفة استحواذ (Max CPA) يمكنك تحملها، وأقل عائد (Min ROAS) تحتاجه لتجنب الخسارة."
      },
      {
        title: "المستشار التسويقي الذكي",
        desc: "مساعد ذكي مدرب على استراتيجيات التسويق. استخدمه لطرح أسئلة سريعة حول المصطلحات أو الحصول على نصائح عامة حول الاستراتيجية."
      }
    ],
    tryIt: "جرب الأدوات أدناه",
    hookTitle: "مولد العناوين الجذابة (Hooks)",
    hookDesc: "احصل على عناوين إعلانية مصممة للبيع ومبنية على علم النفس.",
    chatTitle: "المستشار التسويقي الذكي",
    chatDesc: "اسألني عن استراتيجيات التوسع، تحسين نسبة النقر (CTR)، أو تقليل تكلفة الاستحواذ (CPA).",
    inputPlaceholder: "أدخل اسم المنتج أو المجال (مثال: كريم للعناية بالبشرة)",
    vegetal: "تسويق مستوحى من الطبيعة",
    general: "تسويق عام / مباشر",
    generate: "توليد العناوين",
    chatPlaceholder: "كيف يمكنني تقليل تكلفة العميل (CPA)؟",
    chatSend: "إرسال",
    inputs: {
        product: "نوع المنتج/الخدمة",
        audience: "الجمهور المستهدف",
        pain: "نقطة الألم الرئيسية",
        result: "النتيجة المطلوبة",
        usp: "الميزة التنافسية (الفرق عن غيرك)"
    },
    calculator: {
        title: "حاسبة الربحية (Profitability Calculator)",
        subtitle: "اعرف أرقامك جيداً قبل أن تنفق دولاراً واحداً في الإعلانات.",
        priceLabel: "سعر بيع المنتج ($)",
        costLabel: "تكلفة المنتج (المنتج + الشحن) ($)",
        maxCPA: "أعلى CPA يمكن تحمله",
        minROAS: "أقل عائد ROI يمكن تحمله",
        explanationTitle: "لماذا هذا مهم؟",
        whatIsCPA: "ما هو الـ CPA (تكلفة الاستحواذ)؟",
        cpaDesc: "هو المبلغ الذي تدفعه للإعلانات للحصول على عميل واحد. أعلى CPA يمكن تحمله هو ببساطة هامش ربحك الصافي. إذا دفعت أكثر من هذا الرقم، فأنت تخسر.",
        whatIsROI: "ما هو أقل ROI/ROAS؟",
        roiDesc: "هذا هو الحد الأدنى للعائد الذي تحتاجه لتغطية تكاليفك (نقطة التعادل). إذا كان العائد (ROAS) في حملاتك أقل من هذا الرقم، فإعلاناتك خاسرة.",
        exampleTitle: "مثال توضيحي:",
        exampleText: "إذا كنت تبيع منتجاً بـ 100 دولار وتكلفته عليك 40 دولار (شامل الشحن)، فإن هامش ربحك هو 60 دولار. هذا يعني أن أعلى CPA يمكنك تحمله هو 60 دولار. إذا أنفقت 61 دولار لجلب عميل، فأنت تخسر. ونقطة التعادل للعائد (Min ROAS) ستكون 1.66 (أي 100 تقسيم 60)."
    }
  }
};

export const TRANSLATIONS = {
  en: CONTENT_EN,
  ar: CONTENT_AR
};
