
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';

const blogPosts = {
  'dental-checkups': {
    title: "The Importance of Regular Dental Check-ups",
    date: "March 15, 2024",
    image: "/lovable-uploads/2ac61c5b-9571-4cb8-abc9-ab59d0daa2d7.jpg",
    content: `
      Regular dental check-ups are crucial for maintaining good oral health. During these visits, your dentist can:

      1. Detect Early Signs of Problems
      - Tooth decay
      - Gum disease
      - Early signs of oral cancer
      - Damaged fillings

      2. Professional Cleaning
      Your dental hygienist will remove plaque and tartar build-up that regular brushing can't eliminate.

      3. Preventive Care
      - Fluoride treatments
      - Dental sealants
      - Oral hygiene tips
      
      Don't wait until you have a problem to visit the dentist. Regular check-ups can prevent many dental issues and save you time and money in the long run.
    `
  },
  'oral-hygiene': {
    title: "Tips for Maintaining Good Oral Hygiene",
    date: "March 10, 2024",
    image: "/lovable-uploads/8a24a6ee-66a7-41f8-a09e-9eda16c0553e.jpg",
    content: `
      Maintaining good oral hygiene is essential for your overall health. Here are some key tips:

      1. Proper Brushing Technique
      - Brush at least twice a day
      - Use fluoride toothpaste
      - Spend at least two minutes brushing
      - Don't forget your tongue

      2. Flossing
      - Floss at least once daily
      - Use proper flossing technique
      - Consider water flossers

      3. Diet and Lifestyle
      - Limit sugary foods and drinks
      - Avoid tobacco products
      - Stay hydrated
      
      Following these tips will help maintain your oral health between dental visits.
    `
  },
  'dental-technology': {
    title: "Latest Advancements in Dental Technology",
    date: "March 5, 2024",
    image: "/lovable-uploads/f0f88bb8-49bf-4001-979b-f651850ef775.png",
    content: `
      Modern dentistry has evolved significantly with new technologies:

      1. Digital X-Rays
      - Less radiation exposure
      - Immediate results
      - Better image quality

      2. 3D Printing in Dentistry
      - Custom dental implants
      - Surgical guides
      - Dental models

      3. AI in Dental Care
      - Automated image analysis
      - Treatment planning
      - Patient care optimization
      
      These technologies help provide better, more efficient dental care.
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Card className="overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
              <div className="prose max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
