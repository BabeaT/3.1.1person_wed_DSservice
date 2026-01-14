import { PixelHero } from "@/components/pixel-hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { WorksCard } from "@/components/works-card";
import { ChatAssistant } from "@/components/chat-assistant";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 示例数据
const featuredPosts = [
  {
    title: "像素艺术在现代网页设计中的演变",
    excerpt: "探索像素艺术如何在当代网页设计中找到自己的位置，以及为什么它仍然是一种流行的风格选择。",
    slug: "evolution-pixel-art-web-design",
    date: new Date("2023-04-15"),
    imageUrl: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 7
  },
  {
    title: "创建响应式像素艺术设计",
    excerpt: "学习在不同屏幕尺寸上保持像素艺术美学的技术，同时确保您的设计保持响应式。",
    slug: "responsive-pixel-art-designs",
    date: new Date("2023-05-22"),
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 5
  },
  {
    title: "像素艺术中的色彩心理学",
    excerpt: "有限的调色板如何唤起强烈的情感，并在像素艺术设计中创造难忘的体验。",
    slug: "psychology-color-pixel-art",
    date: new Date("2023-06-10"),
    imageUrl: "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: 6
  }
];

const featuredWorks = [
  {
    title: "像素游戏厅",
    description: "一个具有现代游戏机制的复古风格游戏合集。",
    slug: "pixel-arcade",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["游戏设计", "像素艺术", "JavaScript"]
  },
  {
    title: "汉堡字节",
    description: "一个具有精美像素艺术界面的快餐订购系统。",
    slug: "burger-bytes",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "React", "电子商务"]
  }
];

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <PixelHero />
      
      <PixelSeparator />
      
      <AboutSection />
      
      <PixelSeparator />
      
      <ServicesSection />
      
      <PixelSeparator />
      
      {/* 精选作品板块 */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">精选作品</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works" className="flex items-center">
              查看全部
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          ))}
        </div>
      </section>
      
      <PixelSeparator />
      
      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">最新文章</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog" className="flex items-center">
              查看全部
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              index={index}
            />
          ))}
        </div>
      </section>
      
      <ChatAssistant />
    </div>
  );
}