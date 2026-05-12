export const faqCategories = [
  {
    category: "About the Programme",
    items: [
      {
        q: "Do I need prior yoga experience to join the TTC?",
        a: "You need a minimum of 6 months of regular yoga practice. You do not need to be an advanced practitioner — the programme is designed to build teaching skills from a solid foundation. If you are unsure, contact us for a consultation.",
      },
      {
        q: "What is the difference between Ashtanga and Hatha TTC?",
        a: "The Ashtanga TTC is built around the traditional Ashtanga Vinyasa system — specifically the Primary Series, Mysore style, and the Tristhana method. The Hatha TTC is a broader classical programme covering the full spectrum of Hatha Yoga — asana, pranayama, meditation, and classical texts. Both lead to RYT-200 certification.",
      },
      {
        q: "How many students are in each batch?",
        a: "We maintain a maximum of 12 students per batch to ensure personal attention and an authentic Gurukulam experience. This small group size is fundamental to the quality of teaching and the depth of transformation.",
      },
      {
        q: "Is this a residential programme?",
        a: "Yes, the TTC is fully residential. Students live, eat and practice together at the Samyut Yoga Gurukulam for the 21-day duration. This total immersion is central to the programme's effectiveness.",
      },
    ],
  },
  {
    category: "Logistics & Travel",
    items: [
      {
        q: "How do I get to Mysore?",
        a: "The nearest major airport is Kempegowda International Airport, Bengaluru (BLR), approximately 150km from Mysore. We provide transportation from Bengaluru airport as part of the package. The closest railway station is Mysuru Junction. Please share your travel details after registration.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable, modest yoga clothing; personal toiletries; a journal; any texts you own. We provide yoga mats, blocks, belts and all course materials. A full packing list is sent after registration.",
      },
      {
        q: "Is Mysore safe for solo travellers?",
        a: "Mysore is one of India's cleanest and safest cities — consistently ranked among India's most liveable cities. It is a university town with a long tradition of hosting international yoga students. Solo travellers, including women, consistently find it welcoming and easy to navigate.",
      },
      {
        q: "What is the weather like in Mysore?",
        a: "Mysore has a mild tropical climate year-round. Temperatures during our course months range from 20–30°C (68–86°F). October and November are dry and pleasant. June-August includes some monsoon rains. All indoor spaces are naturally ventilated or air-conditioned.",
      },
    ],
  },
  {
    category: "Fees & Registration",
    items: [
      {
        q: "What is included in the fee?",
        a: "The fee includes: airport/station transfer, accommodation (your chosen room type), all meals (breakfast, lunch, dinner, snacks, herbal drinks), yoga T-shirt, Neti pot, course manual, notebook and pen, all yoga sessions, lifetime Samyut Yoga Forum membership, and Yoga Alliance certification support.",
      },
      {
        q: "How do I pay? What payment methods are accepted?",
        a: "Indian students can pay via Razorpay (UPI, NEFT, debit/credit cards). International students can pay via Stripe (all major credit/debit cards). The application fee (₹25,000 / €349) is paid first to secure your seat. The balance is due 30 days before the course start date.",
      },
      {
        q: "Is the application fee refundable?",
        a: "The application/registration fee is non-refundable as it secures your seat and covers administrative costs. However, in genuine emergency situations, the fee may be transferred to a future batch (subject to availability) at our discretion.",
      },
      {
        q: "Can I get a Yoga Alliance RYT-200 after completing the course?",
        a: "Yes. Samyut Yoga is a Yoga Alliance Registered Yoga School (RYS). After successfully completing all programme requirements, you receive a Samyut Yoga certificate enabling you to register as an RYT-200 with Yoga Alliance (registration fee payable directly to Yoga Alliance).",
      },
    ],
  },
  {
    category: "Life at Samyut Yoga",
    items: [
      {
        q: "What is the daily schedule like?",
        a: "The day begins at 5:30am and ends around 9:30pm with a full programme of practice, philosophy, teaching methodology, anatomy, meals and community time. See the detailed timetable on each course page. It is intensive and transformative — students consistently say the 21 days feel like 3 months of transformation.",
      },
      {
        q: "Is the food vegetarian?",
        a: "Yes, all meals are traditional Indian vegetarian — no meat, no alcohol. The food is nourishing, delicious and prepared according to yogic principles. Special dietary requirements (vegan, gluten-free) can be accommodated with advance notice.",
      },
      {
        q: "Can I use my phone during the programme?",
        a: "We encourage a mindful approach to technology. There is no formal digital detox enforced, but the schedule is immersive enough that most students naturally reduce screen time. We ask that phones be silent during all practice and study sessions.",
      },
      {
        q: "What happens after I graduate?",
        a: "Graduates receive lifetime Samyut Yoga Forum (SYF) membership, a VIP badge in our community, continuing access to resources and the support of our growing global alumni network. Graduates also receive discounts on future Samyut Yoga programmes.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((cat) => cat.items);
