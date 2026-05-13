import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Yoga Wisdom, Philosophy & Teaching",
  description:
    "Insights on Yoga philosophy, pranayama, meditation, Vedanta and the traditional yogic path. From Samyut Yoga — the Traditional Yoga School in Mysore.",
};

// Placeholder posts until Sanity CMS is connected
const posts = [
  {
    title: "The Science of Pranayama: Ancient Breath, Modern Research",
    slug: "science-of-pranayama",
    excerpt: "How traditional yogic breathwork aligns with modern neuroscience and what it means for your practice and teaching.",
    image: "/images/aravind-prasad-virabhadrasana-warrior-pose-mysore.jpg",
    date: "April 15, 2026",
    readTime: "8 min read",
    category: "Pranayama",
  },
  {
    title: "Vedanta & Yoga: The Philosophy Behind the Practice",
    slug: "vedanta-yoga-philosophy",
    excerpt: "Understanding the Vedantic roots of yoga philosophy and why it transforms more than just the physical body.",
    image: "/images/aravind-prasad-meditation-yoga-shala-mysore.jpg",
    date: "April 2, 2026",
    readTime: "12 min read",
    category: "Philosophy",
  },
  {
    title: "Mysore: The World Capital of Yoga — A Complete Guide",
    slug: "mysore-yoga-capital-guide",
    excerpt: "Why Mysore remains the most important destination for serious yoga practitioners and teacher trainees globally.",
    image: "/images/yoga-teacher-training-outdoor-practice-mysore.jpg",
    date: "March 20, 2026",
    readTime: "10 min read",
    category: "Travel & Yoga",
  },
  {
    title: "Ashtanga Yoga: Understanding the Tristhana Method",
    slug: "ashtanga-tristhana-method",
    excerpt: "Breath, gaze and posture — the three pillars that make Ashtanga Vinyasa a complete meditative practice.",
    image: "/images/ashtanga-yoga-teacher-training-outdoor-mysore-india.jpg",
    date: "March 5, 2026",
    readTime: "9 min read",
    category: "Ashtanga",
  },
  {
    title: "Becoming a Yoga Teacher: What No One Tells You",
    slug: "becoming-yoga-teacher-truth",
    excerpt: "Beyond the certificate — the real transformation that happens during a 200hr yoga teacher training programme.",
    image: "/images/hatha-yoga-teacher-training-mysore-aravind-prasad.jpg",
    date: "February 18, 2026",
    readTime: "7 min read",
    category: "Teacher Training",
  },
  {
    title: "Tantra: Dispelling the Myths, Revealing the Wisdom",
    slug: "tantra-myth-and-wisdom",
    excerpt: "What Tantra actually is — the vast philosophical and meditative tradition far removed from modern misconceptions.",
    image: "/images/samyut-yoga-teacher-training-studio-class-mysore.jpg",
    date: "February 1, 2026",
    readTime: "11 min read",
    category: "Tantra",
  },
];

const categories = ["All", "Pranayama", "Philosophy", "Ashtanga", "Teacher Training", "Tantra", "Travel & Yoga"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest py-20">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Knowledge & Wisdom</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h1 className="heading-xl text-ivory mb-4">The Samyut Yoga Blog</h1>
          <p className="text-ivory/65 font-inter text-base max-w-xl mx-auto">
            Insights on Yoga philosophy, pranayama, meditation, Vedanta and the traditional yogic path — from Mysore, India.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-forest/10 sticky top-16 z-30">
        <div className="container-custom overflow-x-auto">
          <div className="flex gap-2 py-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 text-xs font-inter font-medium rounded-full transition-colors ${cat === "All" ? "bg-forest text-ivory" : "border border-forest/20 text-charcoal/60 hover:text-forest hover:border-forest"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-ivory">
        <div className="container-custom">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 bg-white rounded-sm overflow-hidden card-shadow">
            <div className="relative h-64 lg:h-auto">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-forest text-gold text-xs px-2 py-1 font-inter">{featured.category}</div>
            </div>
            <div className="p-7 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-charcoal/40 text-xs font-inter mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h2 className="font-cormorant text-3xl font-semibold text-forest mb-3 group-hover:text-gold transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-charcoal/65 font-inter text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="text-forest font-inter text-sm font-medium underline underline-offset-2">Read article →</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-sm overflow-hidden card-shadow">
                <div className="relative h-44">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-forest text-gold text-xs px-2 py-1 font-inter">{post.category}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-charcoal/40 text-xs font-inter mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-cormorant text-lg font-semibold text-forest mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 font-inter text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
