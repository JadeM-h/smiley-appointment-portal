import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
const Blog = () => {
  const posts = [{
    slug: 'dental-checkups',
    title: "The Importance of Regular Dental Check-ups",
    date: "March 15, 2024",
    excerpt: "Learn why regular dental check-ups are crucial for maintaining optimal oral health...",
    image: "/lovable-uploads/2ac61c5b-9571-4cb8-abc9-ab59d0daa2d7.jpg"
  }, {
    slug: 'oral-hygiene',
    title: "Tips for Maintaining Good Oral Hygiene",
    date: "March 10, 2024",
    excerpt: "Discover the best practices for keeping your teeth and gums healthy...",
    image: "/lovable-uploads/8a24a6ee-66a7-41f8-a09e-9eda16c0553e.jpg"
  }, {
    slug: 'dental-technology',
    title: "Latest Advancements in Dental Technology",
    date: "March 5, 2024",
    excerpt: "Explore the cutting-edge technologies revolutionizing dental care...",
    image: "/lovable-uploads/f0f88bb8-49bf-4001-979b-f651850ef775.png"
  }];
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dental Health Blog</h1>
            <p className="text-xl text-gray-600">Stay informed about dental health and care</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => <Card key={index} className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-xl" />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </Card>)}
          </div>
        </div>
      </main>
    </div>;
};
export default Blog;