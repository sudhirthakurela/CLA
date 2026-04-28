// ============================================================
// CENTERS DATA — edit this file to update center information
// ============================================================

export const centers = [
  {
    id: 'arlington-main',
    slug: 'arlington-main',
    name: 'Arlington Main',
    fullName: 'Creative Learning Academy — Arlington Main',
    tagline: 'Our founding center, serving families since 2014',
    address: '60 Lowell Street',
    city: 'Arlington',
    state: 'MA',
    zip: '02476',
    phone: '857-318-3910',
    email: 'arlington@creativelearningacademy.com',
    hours: {
      weekdays: '7:00 AM – 6:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    mapUrl: 'https://maps.google.com/?q=60+Lowell+Street+Arlington+MA+02476',
    heroColor: 'from-coral-400 to-brand-coral',
    accent: '#FF6B47',
    ageRange: '6 weeks – 7 years',
    capacity: 40,
    programs: ['infant', 'toddler', 'preschool', 'pre-k'],
    highlights: [
      'Outdoor play garden with nature exploration area',
      'Dedicated yoga and movement studio',
      'Bilingual language immersion activities',
      'Arts & crafts atelier',
    ],
    staff: [
      {
        name: 'Poonam Kumari',
        title: 'Founder & Lead Educator',
        credentials: [
          "Master's in Language",
          'Bachelor\'s in Education',
          'EEC Certified Teacher',
          '10+ years experience',
        ],
        bio: 'Poonam founded Creative Learning Academy with a vision to create a space where every child feels seen, valued, and joyfully curious.',
        // photo: '/images/staff/poonam.jpg',  ← add photo path here
      },
      {
        name: 'Yapu Gu',
        title: 'Founder & Director',
        credentials: [
          'BA in International Business',
          'Director II Certified',
          'Montessori Teacher Certified',
          '10+ years in Early Childhood Education',
        ],
        bio: 'Yapu brings a Montessori philosophy and international perspective to the Academy, ensuring every program is thoughtful, structured, and child-led.',
        // photo: '/images/staff/yapu.jpg',  ← add photo path here
      },
    ],
  },

  {
    id: 'arlington-north',
    slug: 'arlington-north',
    name: 'Arlington North',
    fullName: 'Creative Learning Academy — Arlington North',
    tagline: 'Expanding our community in North Arlington',
    address: '210 Massachusetts Avenue',        // ← UPDATE with real address
    city: 'Arlington',
    state: 'MA',
    zip: '02474',                               // ← UPDATE
    phone: '857-555-0201',                      // ← UPDATE
    email: 'arlingtonnorth@creativelearningacademy.com',
    hours: {
      weekdays: '7:00 AM – 6:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    mapUrl: 'https://maps.google.com/?q=210+Massachusetts+Ave+Arlington+MA+02474',
    heroColor: 'from-brand-teal to-teal-400',
    accent: '#2EC4B6',
    ageRange: '6 weeks – 5 years',
    capacity: 35,
    programs: ['infant', 'toddler', 'preschool'],
    highlights: [
      'Bright, open classroom spaces',
      'Dedicated sensory play room',
      'Weekly music and movement sessions',
      'Secure outdoor yard',
    ],
    staff: [
      {
        name: 'Director — TBD',            // ← UPDATE
        title: 'Center Director',
        credentials: ['EEC Director I Certified'],
        bio: 'Our Arlington North director leads a passionate team committed to nurturing every child\'s unique potential.',
      },
    ],
  },

  {
    id: 'harvard',
    slug: 'harvard',
    name: 'Harvard',
    fullName: 'Creative Learning Academy — Harvard',
    tagline: 'Bringing joyful learning to the Harvard community',
    address: '45 Brattle Street',               // ← UPDATE with real address
    city: 'Cambridge',
    state: 'MA',
    zip: '02138',                               // ← UPDATE
    phone: '617-555-0312',                      // ← UPDATE
    email: 'harvard@creativelearningacademy.com',
    hours: {
      weekdays: '7:00 AM – 6:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    mapUrl: 'https://maps.google.com/?q=45+Brattle+Street+Cambridge+MA+02138',
    heroColor: 'from-brand-purple to-purple-400',
    accent: '#9B5DE5',
    ageRange: '6 weeks – 7 years',
    capacity: 45,
    programs: ['infant', 'toddler', 'preschool', 'pre-k'],
    highlights: [
      'State-of-the-art learning materials',
      'STEM exploration lab',
      'Language immersion in Spanish and Mandarin',
      'Rooftop garden classroom',
    ],
    staff: [
      {
        name: 'Director — TBD',            // ← UPDATE
        title: 'Center Director',
        credentials: ['EEC Director II Certified', 'M.Ed. Early Childhood Education'],
        bio: 'Our Harvard center director brings academic rigor and warm nurturing together in a vibrant learning community.',
      },
    ],
  },
]

// Helper: get a single center by slug
export function getCenterBySlug(slug) {
  return centers.find((c) => c.slug === slug)
}
