// ============================================================
// CENTERS DATA — edit this file to update center information
// ============================================================

export const centers = [
  {
    id: "arlington-main",
    slug: "arlington-main",
    name: "Arlington Main",
    fullName: "Creative Learning Academy — Arlington Main",
    tagline: "Our founding center, serving families since 2014",
    address: "60 Lowell Street",
    city: "Arlington",
    state: "MA",
    zip: "02476",
    phone: "857-318-3910",
    email: "arlington@creativelearningacademy.com",
    hours: {
      weekdays: "7:00 AM – 6:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    mapUrl: "https://maps.google.com/?q=60+Lowell+Street+Arlington+MA+02476",
    heroColor: "from-coral-400 to-brand-coral",
    accent: "#FF6B47",
    ageRange: "6 weeks – 7 years",
    capacity: 40,
    programs: ["infant", "toddler", "preschool", "pre-k"],
    highlights: [
      "Outdoor play garden with nature exploration area",
      "Dedicated yoga and movement studio",
      "Bilingual language immersion activities",
      "Arts & crafts atelier",
    ],
    staff: [
      {
        name: "Poonam Kumari",
        title: "Founder & Lead Educator",
        credentials: [
          "Master\'s in Language",
          "Bachelor\'s in Education",
          "EEC Certified Teacher",
          "10+ years experience",
        ],
        bio: "Poonam founded Creative Learning Academy with a vision to create a space where every child feels seen, valued, and joyfully curious.",
      },
      {
        name: "Yapu Gu",
        title: "Founder & Director",
        credentials: [
          "BA in International Business",
          "Director II Certified",
          "Montessori Teacher Certified",
          "10+ years in Early Childhood Education",
        ],
        bio: "Yapu brings a Montessori philosophy and international perspective to the Academy, ensuring every program is thoughtful, structured, and child-led.",
      },
    ],
  },

  {
    id: "arlington-north",
    slug: "arlington-north",
    name: "Arlington North",
    fullName: "Creative Learning Academy — Arlington North",
    tagline: "Expanding our community in North Arlington",
    address: "210 Massachusetts Avenue",
    city: "Arlington",
    state: "MA",
    zip: "02474",
    phone: "857-555-0201",
    email: "arlingtonnorth@creativelearningacademy.com",
    hours: {
      weekdays: "7:00 AM – 6:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    mapUrl: "https://maps.google.com/?q=210+Massachusetts+Ave+Arlington+MA+02474",
    heroColor: "from-brand-teal to-teal-400",
    accent: "#2EC4B6",
    ageRange: "6 weeks – 5 years",
    capacity: 35,
    programs: ["infant", "toddler", "preschool"],
    highlights: [
      "Bright, open classroom spaces",
      "Dedicated sensory play room",
      "Weekly music and movement sessions",
      "Secure outdoor yard",
    ],
    staff: [
      {
        name: "Director — TBD",
        title: "Center Director",
        credentials: ["EEC Director I Certified"],
        bio: "Our Arlington North director leads a passionate team committed to nurturing every child\'s unique potential.",
      },
    ],
  },

  {
    id: "harvard",
    slug: "harvard",
    name: "Harvard",
    fullName: "CLA Harvard Corp",
    tagline: "Nurturing young minds in the heart of Harvard, MA",
    address: "200 Ayer Rd",
    city: "Harvard",
    state: "MA",
    zip: "",
    phone: "281-777-9951",
    email: "creativelearningharvard@gmail.com",
    hours: {
      weekdays: "8:00 AM – 5:00 PM",
      earlyDropOff: "Early Drop-Off: 7:45 AM",
      extendedDay: "Extended Day: Until 5:30 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    mapUrl: "https://maps.google.com/?q=200+Ayer+Rd+Harvard+MA",
    heroColor: "from-brand-purple to-purple-400",
    accent: "#9B5DE5",
    ageRange: "6 weeks – School Age",
    capacity: 45,
    programs: ["infant", "toddler", "preschool", "pre-k", "after-school", "summer"],
    about: "At CLA Harvard Corp, we provide a nurturing and engaging environment where children can grow, learn, and thrive. Our programs are designed to support every stage of early childhood, helping children build confidence, curiosity, and a love of learning.",
    approach: [
      "Hands-on learning",
      "Social and emotional development",
      "Age-appropriate activities",
      "Creativity and exploration",
    ],
    highlights: [
      "Infant through Pre-K plus After-School & Summer programs",
      "Thoughtfully designed classrooms for every age group",
      "Fully certified, dedicated teaching staff",
      "Extended day until 5:30 PM available",
    ],
    staff: [
      {
        name: "CLA Harvard Team",
        title: "Fully Certified Educators",
        credentials: [
          "EEC Certified Teachers",
          "Focused on independence & individual development",
        ],
        bio: "Our team of fully certified teachers is dedicated to creating a positive and enriching environment for every child. We focus on building strong relationships, encouraging independence, and supporting each child\'s unique development.",
      },
    ],
  },
]

// Helper: get a single center by slug
export function getCenterBySlug(slug) {
  return centers.find((c) => c.slug === slug)
}
