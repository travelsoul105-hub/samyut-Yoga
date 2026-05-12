"use client";

import { useState } from "react";
import { Heart, Reply, Crown, Plus } from "lucide-react";

const threads = [
  {
    id: 1,
    module: "Module 1",
    title: "Understanding Mula Bandha — confusing myself!",
    author: "Maria G.",
    authorBadge: "TTC Student",
    time: "2 hours ago",
    preview: "I keep reading conflicting things about Mula Bandha — some say contract, some say lift. Yogacharya, could you clarify the traditional approach?",
    replies: 4,
    likes: 7,
    hasTeacherReply: true,
  },
  {
    id: 2,
    module: "Global Forum",
    title: "Resources for Yoga Philosophy — recommendations?",
    author: "James K.",
    authorBadge: "Graduate",
    isVIP: true,
    time: "1 day ago",
    preview: "I wanted to share some additional resources I found useful after completing the TTC — particularly for Vedanta study.",
    replies: 8,
    likes: 15,
    hasTeacherReply: false,
  },
  {
    id: 3,
    module: "Module 3",
    title: "Yoga Sutras I:1 — 'atha yoganushasanam'",
    author: "Priya S.",
    authorBadge: "TTC Student",
    time: "3 days ago",
    preview: "Fascinated by the opening sutra. The word 'atha' implies readiness — but what exactly is that readiness? How did others interpret this?",
    replies: 12,
    likes: 22,
    hasTeacherReply: true,
  },
];

export default function ForumPage() {
  const [newPost, setNewPost] = useState(false);
  const [postText, setPostText] = useState("");

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-cormorant text-4xl font-semibold text-forest">Samyut Yoga Forum</h1>
        <button onClick={() => setNewPost(!newPost)}
          className="flex items-center gap-2 bg-forest text-ivory px-4 py-2 rounded text-sm font-inter font-medium hover:bg-forest-light transition-colors">
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>
      <p className="text-charcoal/55 font-inter text-sm mb-6">Community discussion for students and graduates</p>

      {/* VIP badge note */}
      <div className="bg-gold/10 border border-gold/30 p-3 rounded-sm flex items-center gap-2 mb-6">
        <Crown className="w-4 h-4 text-gold flex-shrink-0" />
        <p className="text-charcoal/70 font-inter text-xs">
          <strong className="text-charcoal">Lifetime VIP Membership</strong> is FREE with any TTC enrollment. Graduates receive the VIP crown badge.
        </p>
      </div>

      {/* New post form */}
      {newPost && (
        <div className="bg-white border border-forest/15 p-5 rounded-sm mb-6">
          <h3 className="font-cormorant text-lg font-semibold text-forest mb-3">Create New Post</h3>
          <input className="w-full border border-forest/20 rounded px-3 py-2 text-sm font-inter mb-3 focus:outline-none focus:border-forest"
            placeholder="Post title..." />
          <textarea value={postText} onChange={(e) => setPostText(e.target.value)} rows={4}
            className="w-full border border-forest/20 rounded px-3 py-2 text-sm font-inter mb-3 resize-none focus:outline-none focus:border-forest"
            placeholder="Share your question, insight or reflection..." />
          <div className="flex gap-3">
            <button onClick={() => { setNewPost(false); setPostText(""); }}
              className="border border-forest/20 text-forest px-4 py-2 rounded text-xs font-inter hover:bg-forest/5 transition-colors">
              Cancel
            </button>
            <button className="bg-forest text-ivory px-5 py-2 rounded text-xs font-inter font-medium hover:bg-forest-light transition-colors">
              Post
            </button>
          </div>
        </div>
      )}

      {/* Thread list */}
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="bg-white border border-forest/10 p-5 rounded-sm hover:border-gold/30 transition-colors cursor-pointer">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xs font-inter px-2 py-0.5 bg-forest/10 text-forest rounded-sm flex-shrink-0">{thread.module}</span>
              {thread.hasTeacherReply && (
                <span className="text-xs font-inter px-2 py-0.5 bg-gold/20 text-amber rounded-sm flex-shrink-0">Teacher replied</span>
              )}
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-forest mb-2 hover:text-gold transition-colors">
              {thread.title}
            </h3>
            <p className="text-charcoal/60 font-inter text-sm leading-relaxed mb-4 line-clamp-2">{thread.preview}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
                  <span className="text-ivory text-xs font-bold">{thread.author[0]}</span>
                </div>
                <span className="font-inter text-xs text-charcoal/60">{thread.author}</span>
                {thread.isVIP && <Crown className="w-3.5 h-3.5 text-gold" />}
                <span className="text-charcoal/30 text-xs">·</span>
                <span className="font-inter text-xs text-charcoal/40">{thread.time}</span>
              </div>
              <div className="flex items-center gap-4 text-charcoal/40">
                <span className="flex items-center gap-1 text-xs font-inter">
                  <Reply className="w-3.5 h-3.5" /> {thread.replies}
                </span>
                <span className="flex items-center gap-1 text-xs font-inter">
                  <Heart className="w-3.5 h-3.5" /> {thread.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
