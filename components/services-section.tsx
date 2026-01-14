"use client";

import { motion } from "framer-motion";
import { CodeIcon, PaintbrushIcon, LayoutIcon, RocketIcon } from "lucide-react";

const services = [
  {
    title: "网页开发",
    description: "使用现代技术构建的定制网站，提供最佳性能和用户体验。",
    icon: <CodeIcon className="h-10 w-10" />,
  },
  {
    title: "UI/UX设计",
    description: "直观且视觉吸引人的设计，为用户创造有意义的体验。",
    icon: <PaintbrushIcon className="h-10 w-10" />,
  },
  {
    title: "品牌形象",
    description: "连贯的视觉系统，传达您品牌独特的故事和价值观。",
    icon: <LayoutIcon className="h-10 w-10" />,
  },
  {
    title: "数字营销",
    description: "战略性营销活动，提高可见度并推动与目标受众的互动。",
    icon: <RocketIcon className="h-10 w-10" />,
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">我的服务</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="pixel-card p-6 bg-white dark:bg-black"
          >
            <div className="p-4 bg-primary text-black mb-6 inline-block border-2 border-black">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}