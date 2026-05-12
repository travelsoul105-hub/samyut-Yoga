import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

// Placeholder posts until Sanity is connected
const placeholderPosts = [
  {
    title: "The Science of Pranayama: Ancient Breath, Modern Research",
    slug: "science-of-pranayama",
    excerpt: "How traditional yogic breathwork aligns with modern neuroscience and what it means for your practice.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/05/YOGAPHILOSOPY.jpg",
    date: "April 15, 2026",
    category: "Pranayama",
  },
  {
    title: "Vedanta & Yoga: The Philosophy Behind the Practice",
    slug: "vedanta-yoga-philosophy",
    excerpt: "Understanding the Vedantic roots of yoga philosophy and why it transforms more than just the body.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/05/YOGAPSYCHOLOGYMANAGEMENT.jpg",
    date: "April 2, 2026",
    category: "Philosophy",
  },
  {
    title: "Mysore: The World Capital of Yoga — A Complete Guide",
    slug: "mysore-yoga-capital-guide",
    excerpt: "Why Mysore remains the most important destination for serious yoga practitioners and teacher trainees.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/05/YOGAPRACTICE.jpg",
    date: "March 20, 2026",
    category: "Travel & Yoga",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Knowledge & Wisdom</span>
            </div>
            <h2 className="heading-md text-forest">From the Samyut Yoga Blog</h2>
          </div>
          <Link href="/blog" className="hidden sm:block text-forest font-inter text-sm font-medium underline underline-offset-2 hover:text-gold transition-colors">
            View all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-sm overflow-hidden card-shadow">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest text-gold text-xs px-2 py-1 font-inter">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-charcoal/40 text-xs font-inter mb-2">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="font-cormorant text-lg font-semibold text-forest mb-2 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-charcoal/60 font-inter text-xs leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/blog" className="text-forest font-inter text-sm font-medium underline underline-offset-2">
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
