// All copy below is taken from skylarkglobaledu.com (archived build, 2023–2026),
// with spelling, grammar and conflicting claims tidied up for this concept demo.
export type L = { en: string; bn: string };

export const contact = {
  phone: "+880 1405-780977",
  phoneHref: "tel:+8801405780977",
  whatsapp: "https://wa.me/8801405780977",
  email: "info@skylarkglobaledu.com",
  addressLines: ["House 1016 (4th floor), Road 09, Avenue 09", "Mirpur DOHS, Section 12, Dhaka 1216"],
  hours: { en: "Saturday – Thursday · 9 AM – 8 PM", bn: "শনিবার – বৃহস্পতিবার · সকাল ৯টা – রাত ৮টা" },
  facebook: "https://www.facebook.com/skylark2019",
  instagram: "https://www.instagram.com/skylark.global/",
  youtube: "https://www.youtube.com/@SkylarkGlobal",
};

export const nav: { href: string; label: L }[] = [
  { href: "/", label: { en: "Home", bn: "হোম" } },
  { href: "/about/", label: { en: "About", bn: "আমাদের সম্পর্কে" } },
  { href: "/universities/", label: { en: "Universities", bn: "বিশ্ববিদ্যালয়" } },
  { href: "/success-stories/", label: { en: "Success Stories", bn: "সাফল্যের গল্প" } },
  { href: "/gallery/", label: { en: "Gallery", bn: "গ্যালারি" } },
  { href: "/contact/", label: { en: "Contact", bn: "যোগাযোগ" } },
];

export const hero = {
  eyebrow: { en: "Govt. approved · Internationally certified · Since 2016", bn: "সরকার অনুমোদিত · আন্তর্জাতিকভাবে স্বীকৃত · ২০১৬ থেকে" },
  title1: { en: "Fly your dream.", bn: "স্বপ্নকে দিন ডানা।" },
  title2: { en: "Study abroad with confidence.", bn: "আত্মবিশ্বাসের সাথে বিদেশে পড়াশোনা।" },
  sub: {
    en: "Student visas, admissions and skilled migration to the UK, USA, Canada, Australia and Europe — guided end-to-end by Skylark Global's counsellors in Mirpur DOHS, Dhaka.",
    bn: "যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া ও ইউরোপে স্টুডেন্ট ভিসা, ভর্তি ও স্কিলড মাইগ্রেশন — মিরপুর ডিওএইচএস-এ স্কাইলার্ক গ্লোবালের অভিজ্ঞ কাউন্সেলরদের সম্পূর্ণ সহায়তায়।",
  },
  cta1: { en: "Check my eligibility", bn: "যোগ্যতা যাচাই করুন" },
  cta2: { en: "Chat on WhatsApp", bn: "হোয়াটসঅ্যাপে কথা বলুন" },
};

export const stats: { value: number; suffix: string; label: L }[] = [
  { value: 10, suffix: "", label: { en: "Years guiding students", bn: "বছরের অভিজ্ঞতা" } },
  { value: 50, suffix: "+", label: { en: "Partner universities", bn: "পার্টনার বিশ্ববিদ্যালয়" } },
  { value: 100, suffix: "+", label: { en: "Happy clients", bn: "সন্তুষ্ট ক্লায়েন্ট" } },
  { value: 15, suffix: "+", label: { en: "Professional staff", bn: "পেশাদার কর্মী" } },
];

export const services: { icon: string; title: L; text: L }[] = [
  { icon: "GraduationCap", title: { en: "Global Education", bn: "গ্লোবাল এডুকেশন" }, text: { en: "University and college admissions, scholarships and student visas for top destinations.", bn: "শীর্ষ গন্তব্যে বিশ্ববিদ্যালয় ও কলেজে ভর্তি, স্কলারশিপ এবং স্টুডেন্ট ভিসা।" } },
  { icon: "Briefcase", title: { en: "Skilled Migration", bn: "স্কিলড মাইগ্রেশন" }, text: { en: "Pathways for professionals to build a career and life abroad, step by step.", bn: "পেশাজীবীদের বিদেশে ক্যারিয়ার ও জীবন গড়ার ধাপে ধাপে পথনির্দেশনা।" } },
  { icon: "BadgeCheck", title: { en: "Work Visa", bn: "ওয়ার্ক ভিসা" }, text: { en: "Guidance on work permits and employer-sponsored visas, including USA H-2B.", bn: "ওয়ার্ক পারমিট ও এমপ্লয়ার-স্পনসরড ভিসায় সহায়তা, যুক্তরাষ্ট্রের H-2B সহ।" } },
  { icon: "Plane", title: { en: "Tour Package", bn: "ট্যুর প্যাকেজ" }, text: { en: "Visit visas and travel packages, including UK B1/B2 and multiple-entry visas.", bn: "ভিজিট ভিসা ও ট্রাভেল প্যাকেজ, যুক্তরাজ্যের B1/B2 ও মাল্টিপল-এন্ট্রি ভিসাসহ।" } },
];

export const destinations: { code: string; name: L; img?: string; note: L }[] = [
  { code: "UK", name: { en: "United Kingdom", bn: "যুক্তরাজ্য" }, img: "/images/campus/graduates.jpg", note: { en: "1-year master's · Graduate Route", bn: "১ বছরের মাস্টার্স · গ্র্যাজুয়েট রুট" } },
  { code: "US", name: { en: "United States", bn: "যুক্তরাষ্ট্র" }, img: "/images/campus/missouri.jpg", note: { en: "Scholarships · STEM OPT", bn: "স্কলারশিপ · STEM OPT" } },
  { code: "CA", name: { en: "Canada", bn: "কানাডা" }, img: "/images/campus/vanier.jpg", note: { en: "Colleges & universities · PGWP", bn: "কলেজ ও বিশ্ববিদ্যালয় · PGWP" } },
  { code: "AU", name: { en: "Australia", bn: "অস্ট্রেলিয়া" }, note: { en: "Charles Darwin · Swinburne", bn: "চার্লস ডারউইন · সুইনবার্ন" } },
  { code: "EU", name: { en: "Europe", bn: "ইউরোপ" }, note: { en: "Affordable tuition · Schengen", bn: "সাশ্রয়ী টিউশন · শেনজেন" } },
];

export const steps: { title: L; text: L }[] = [
  { title: { en: "Free counselling", bn: "ফ্রি কাউন্সেলিং" }, text: { en: "Meet a counsellor in Mirpur DOHS or online.", bn: "মিরপুর ডিওএইচএস অফিসে বা অনলাইনে।" } },
  { title: { en: "Shortlist", bn: "শর্টলিস্ট" }, text: { en: "Country, course and budget that fit your profile.", bn: "আপনার প্রোফাইলের উপযোগী দেশ, কোর্স ও বাজেট।" } },
  { title: { en: "Apply", bn: "আবেদন" }, text: { en: "Documents, SOP and applications handled with you.", bn: "ডকুমেন্ট, SOP ও আবেদন আমরা একসাথে করি।" } },
  { title: { en: "Offer & visa", bn: "অফার ও ভিসা" }, text: { en: "Offer letter, visa file and interview preparation.", bn: "অফার লেটার, ভিসা ফাইল ও ইন্টারভিউ প্রস্তুতি।" } },
  { title: { en: "Fly", bn: "উড়াল" }, text: { en: "Pre-departure briefing and support after arrival.", bn: "যাত্রার আগে ব্রিফিং ও পৌঁছানোর পর সহায়তা।" } },
];

export const why: { icon: string; title: L; text: L }[] = [
  { icon: "ShieldCheck", title: { en: "Authorised representative", bn: "অনুমোদিত প্রতিনিধি" }, text: { en: "Certified recruitment partner for colleges in Canada, the UK and beyond.", bn: "কানাডা, যুক্তরাজ্যসহ বিভিন্ন দেশের প্রতিষ্ঠানের সার্টিফায়েড রিক্রুটমেন্ট পার্টনার।" } },
  { icon: "Users", title: { en: "Experienced counsellors", bn: "অভিজ্ঞ কাউন্সেলর" }, text: { en: "Expert help from education consultants and qualified advisers.", bn: "শিক্ষা পরামর্শক ও যোগ্য উপদেষ্টাদের বিশেষজ্ঞ সহায়তা।" } },
  { icon: "Handshake", title: { en: "Transparent & honest", bn: "স্বচ্ছ ও সৎ" }, text: { en: "We pledge to be transparent, honest and reliable in every interaction.", bn: "প্রতিটি ধাপে আমরা স্বচ্ছ, সৎ ও নির্ভরযোগ্য থাকার অঙ্গীকার করি।" } },
  { icon: "Clock", title: { en: "Flexible & available", bn: "সবসময় পাশে" }, text: { en: "Flexible office and phone scheduling for urgent questions.", bn: "জরুরি প্রয়োজনে নমনীয় অফিস ও ফোন শিডিউল।" } },
];

export const team = [
  { name: "Md. Mehedi Hassan", role: "Founder & CEO", img: "/images/team/mehedi.jpg" },
  { name: "Mahfuzur Hossain Mridul", role: "Executive Director", img: "/images/team/mahfuz.jpg" },
  { name: "Rakib Mahmud Abir", role: "Academic Director", img: "/images/team/rakib.jpg" },
  { name: "Sabina Yeasmin", role: "Chief Operating Officer", img: "/images/team/sabina.jpg" },
  { name: "Kaniz Fatema", role: "IT Director", img: "/images/team/kaniz.jpg" },
];

export const messages = [
  {
    name: "Md. Mehedi Hassan", role: "Founder & CEO", img: "/images/team/mehedi.jpg",
    text: "Thanks to Almighty Allah. Behind every success story there are some wise decisions. Skylark Global has been your trustworthy abroad-solutions partner since 2016, and over this journey we have earned a great deal of love, respect and support from our valued clients. Our main motive is to prioritise our clients and serve them in the best way to achieve their dreams. Remember: to chase your dream, hunt it and you will find your destination. Fly your dream with us.",
  },
  {
    name: "Engr. A.K.M Abdul Mannan", role: "Chief Financial Advisor · Toronto, Canada", img: "/images/team/mannan.jpg",
    text: "Success is the goal of everyone's life, and no one can achieve it without hard work. Everyone has a dream or goal they work towards sincerely. I wish Skylark Global will continue to achieve its goals with sincerity.",
  },
  {
    name: "Mahfuzur Hossain Mridul", role: "Executive Director", img: "/images/team/mahfuz.jpg",
    text: "Skylark Global is committed to providing top-notch services that help students pursue their educational goals overseas. We understand this journey can be daunting, but with our guidance and expertise we make the process seamless. We place the utmost importance on trust — that is why we pledge to be transparent, honest and reliable in every interaction, and to build long-lasting relationships with our clients.",
  },
  {
    name: "Rakib Mahmud Abir", role: "Academic Director", img: "/images/team/rakib.jpg",
    text: "On behalf of Skylark Global, I am proud to say we have been serving students for a decade. Over this time we have faced everything an organisation can face, and with the grace of the Almighty and the excellent effort of our team, we have overcome every barrier to deliver the highest level of client satisfaction. We are dedicated to making your dream come true.",
  },
];

export const mission = {
  strategy: [
    "Grow through strong local and international networking.",
    "Professional, customised service for every student.",
    "Flexible office and phone scheduling for urgent needs.",
    "Expert help from experienced education consultants and qualified lawyers, whatever level you want to study.",
  ],
  mission: "To create opportunities for smart, dynamic students who want to lead the next generation.",
  vision: "To recommend only institutions that are in the best interest of each student's profile — and guide them through every step of the application, to universities, language schools and colleges.",
  reach: "More than 50 partner universities, with student support used across the US, UK, Sweden, India, Malaysia, Romania and more.",
};

export const featuredUnis = [
  { name: "Morehead State University", country: "USA", img: "/images/campus/morehead.jpg" },
  { name: "University of Missouri", country: "USA", img: "/images/campus/missouri.jpg" },
  { name: "Whitworth University", country: "USA", img: "/images/campus/whitworth.jpg" },
  { name: "Vanier College", country: "Canada", img: "/images/campus/vanier.jpg" },
  { name: "California State University", country: "USA" },
  { name: "Charles Darwin University", country: "Australia" },
  { name: "University of New Haven", country: "USA" },
  { name: "Hawaiʻi Pacific University", country: "USA" },
];

export const moreUnis = [
  ["Bay Atlantic University", "USA"], ["Hawaiʻi Pacific University", "USA"], ["Mount St. Joseph University", "USA"],
  ["Notre Dame de Namur University", "USA"], ["Pacific States University", "USA"], ["Pacific Lutheran University", "USA"],
  ["Walsh University", "USA"], ["Rider University", "USA"], ["Whitworth University", "USA"], ["Webster University", "USA"],
  ["University of the Fraser Valley", "Canada"], ["Eastern Michigan University", "USA"], ["Jackson State University", "USA"],
  ["Montana State University", "USA"], ["University of Missouri", "USA"], ["Swinburne University of Technology", "Australia"],
  ["University of New England", "Australia"], ["Lincoln University College", "Malaysia"], ["Arkansas State University", "USA"],
  ["Cypress College", "USA"], ["Acsenda School of Management", "Canada"], ["Focus College", "Canada"],
] as const;

export const uniLogos = [
  ["bay-atlantic.png", "Bay Atlantic University"], ["lincoln.png", "Lincoln University College"], ["swinburne.png", "Swinburne University"],
  ["hawaii-pacific.jpg", "Hawaiʻi Pacific University"], ["morehead.png", "Morehead State University"], ["une.png", "University of New England"],
  ["cal-state.png", "California State University"], ["arkansas-state.jpg", "Arkansas State University"], ["acsenda.png", "Acsenda School of Management"],
  ["cypress.jpg", "Cypress College"], ["eastern-michigan.jpg", "Eastern Michigan University"], ["focus.png", "Focus College"],
] as const;

export const certs = [
  { img: "/images/certs/oxford.jpg", title: "Oxford College of Education" },
  { img: "/images/certs/casa.jpg", title: "CASA College & KASA High School" },
  { img: "/images/certs/fcmt.jpg", title: "FCMT Toronto" },
  { img: "/images/certs/lester.jpg", title: "Lester B. Pearson School Board" },
  { img: "/images/certs/unizportal.jpg", title: "UnizPortal" },
  { img: "/images/certs/studyinfo.jpg", title: "Study Info Centre" },
];

export const stories = [
  { name: "Mr. Ismail", dest: "Canada", img: "/images/students/s4.jpg", quote: "It's two months already — you're having a great time here in Canada. Congratulations once again, Mr. Ismail! We wish you success throughout your studies, and we are so happy we helped you achieve your dream of studying in Canada." },
  { name: "Successful visa", dest: "Featured on our success wall", img: "/images/students/s2.jpg", quote: "" },
  { name: "Successful visa", dest: "Featured on our success wall", img: "/images/students/s1.jpg", quote: "" },
];

export const visaTypes = ["UK (B1/B2)", "USA (H-2B)", "UK (Multiple entry)", "Canada (study)"];

export const gallery = [
  "/images/team/group.jpg", "/images/gallery/g1.jpg", "/images/gallery/g2.jpg", "/images/gallery/g5.jpg", "/images/gallery/g4.jpg",
  "/images/gallery/g6.jpg", "/images/gallery/g7.jpg", "/images/team/group-2.jpg", "/images/gallery/g3.jpg", "/images/gallery/g8.jpg",
  "/images/campus/vanier.jpg", "/images/campus/missouri.jpg",
];
