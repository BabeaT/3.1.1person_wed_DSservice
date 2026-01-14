"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuitIcon, CodeIcon, PaintbrushIcon, GamepadIcon } from "lucide-react";

const skills = [
  { name: "网页开发", icon: <CodeIcon className="h-6 w-6" />, level: 90 },
  { name: "UI/UX设计", icon: <PaintbrushIcon className="h-6 w-6" />, level: 85 },
  { name: "游戏开发", icon: <GamepadIcon className="h-6 w-6" />, level: 75 },
  { name: "AI集成", icon: <BrainCircuitIcon className="h-6 w-6" />, level: 80 },
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">关于我</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="开发者肖像"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">你好，我是像素艺术家</h3>
          
          <p className="text-lg">
            我是一名富有创造力的开发者和设计师，热衷于创造独特的数字体验。拥有超过5年的经验，我专注于构建像素级完美的网站和应用程序。
          </p>
          
          <p className="text-lg">
            我在设计和开发方面的背景使我能够从概念到实现创建连贯的体验。我特别喜欢像素艺术美学和复古游戏的影响。
          </p>
          
          <div className="space-y-4 mt-8">
            <h4 className="text-xl font-bold">我的技能</h4>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-primary text-black">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 border-2 border-black">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}