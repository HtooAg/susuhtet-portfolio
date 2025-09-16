"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BarChart3, HeadphonesIcon, Monitor, Clock, TrendingUp, UserPlus, Heart } from "lucide-react"

const skills = [
  { name: "Recruiting", icon: UserPlus, level: 90 },
  { name: "Management", icon: Users, level: 85 },
  { name: "Data Analysis", icon: BarChart3, level: 80 },
  { name: "Customer Service", icon: HeadphonesIcon, level: 95 },
  { name: "Microsoft Office", icon: Monitor, level: 88 },
  { name: "Time Management", icon: Clock, level: 92 },
  { name: "Relationship Building", icon: Heart, level: 96 },
  { name: "Business Development", icon: TrendingUp, level: 87 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Core competencies that drive success in financial services and client relationships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-12 h-12 gradient-gold rounded-lg mb-4"
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-foreground mb-3 text-lg">{skill.name}</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="gradient-gold h-2 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
