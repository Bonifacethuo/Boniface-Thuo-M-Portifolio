import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Brain, Bot, ExternalLink, Globe, Mic } from "lucide-react";

type Category = "all" | "analysis" | "ml" | "automation";

const projects = [
  {
    title: "MapenziLink",
    category: "automation" as Category,
    problem: "Need for a streamlined digital connection platform.",
    approach: "React, Node.js, Vercel",
    solution: "Developed a modern, responsive web application with seamless performance.",
    impact: "Smooth UI/UX rendering with effective live web deployment.",
    icon: Globe,
    githubUrl: "#",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://mapenzilink.vercel.app/",
    liveUrl: "https://mapenzilink.vercel.app/",
  },
  {
    title: "Recordly",
    category: "automation" as Category,
    problem: "Managing and analyzing audio records efficiently.",
    approach: "Next.js, Tailwind, Vercel",
    solution: "Built an intuitive audio processing and management platform.",
    impact: "Enabled users to easily access and categorize their recordings.",
    icon: Mic,
    githubUrl: "#",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://recordly-rho.vercel.app/",
    liveUrl: "https://recordly-rho.vercel.app/",
  },
  {
    title: "SyriaTel Customer Churn Prediction",
    category: "ml" as Category,
    description: "A machine learning project that predicts customer churn in the telecom industry, enabling targeted retention strategies and reducing revenue loss.",
    tools: ["Python", "Scikit-learn", "Pandas"],
    icon: Brain,
    githubUrl: "https://github.com/Bonifacethuo/SyriaTel-Customer-Churn-Prediction",
  },
  {
    title: "Aviation Accident Analysis & Risk Assessment",
    category: "analysis" as Category,
    description: "Data analysis project identifying low-risk aircraft and key safety patterns to support strategic aviation investment decisions.",
    tools: ["Python", "Data Analysis", "Visualization"],
    icon: BarChart3,
    githubUrl: "https://github.com/Bonifacethuo/Aviation-Accident-Analysis.git",
  },
  {
    title: "Automated Python Scripts",
    category: "automation" as Category,
    description: "Automation scripts for extracting and analyzing data from PowerPoint and Excel files, improving efficiency in data processing tasks.",
    tools: ["Python", "XML Parsing", "Pandas"],
    icon: Bot,
    githubUrl: "https://github.com/Bonifacethuo/Automated-Python-Scripts.git",
  },
  {
    title: "OSWorld SFT - Turing Tooling",
    category: "ml" as Category,
    description: "A tooling system for collecting, validating, and refining supervised fine-tuning (SFT) datasets for AI training workflows.",
    tools: ["Python", "Jupyter", "Data Pipelines"],
    icon: Bot,
    githubUrl: "https://github.com/Bonifacethuo/Boniface-Thuo-Turing",
  },
  {
    title: "Finance RAG Chatbot",
    category: "ml" as Category,
    description: "A retrieval-augmented chatbot that processes financial documents and provides accurate, context-aware answers via API.",
    tools: ["Python", "LLM", "Vector Embeddings"],
    icon: Brain,
    githubUrl: "https://github.com/Bonifacethuo/Chatbot-1",
  },
  {
    title: "Solar Panel Detection",
    category: "ml" as Category,
    description: "A computer vision model for detecting solar panels from satellite imagery to support renewable energy tracking.",
    tools: ["Python", "Computer Vision", "Deep Learning"],
    icon: Brain,
    githubUrl: "https://github.com/Bonifacethuo/Lacuna-Solar-Survey-Challenge-Zindi-Competition-",
  },
  {
    title: "Tableau Aviation Dashboard",
    category: "analysis" as Category,
    description: "Interactive dashboard visualizing aviation accident trends, risk factors, and safety insights for decision-making.",
    tools: ["Tableau", "Data Visualization"],
    icon: BarChart3,
    liveUrl: "https://public.tableau.com/app/profile/boniface.thuo/viz/ProjectTableau_17273446666590/Dashboard1",
  }
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "analysis", label: "Data Analysis" },
  { key: "ml", label: "Machine Learning" },
  { key: "automation", label: "Automation" },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Category>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === c.key
                  ? "gradient-bg text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const linkTarget = ((p as any).liveUrl || p.githubUrl);
              return (
              <motion.a
                key={p.title}
                href={linkTarget}
                target={linkTarget !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 hover-lift group flex flex-col h-full cursor-pointer block"
              >
                {/* Optional Image Preview */}
                {(p as any).imageUrl && (
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden border border-glass-border">
                    <img src={(p as any).imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <p.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {p.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm flex-grow flex flex-col">
                  {(p as any).description ? (
                    <div className="text-muted-foreground mb-2">{(p as any).description}</div>
                  ) : (
                    <>
                      <div>
                        <span className="text-primary font-medium">Problem: </span>
                        <span className="text-muted-foreground">{p.problem}</span>
                      </div>
                      <div>
                        <span className="text-primary font-medium">Solution: </span>
                        <span className="text-muted-foreground">{p.solution}</span>
                      </div>
                      <div className="pt-2 border-t border-glass-border mb-2">
                        <span className="text-accent font-semibold">Impact: </span>
                        <span className="text-foreground">{p.impact}</span>
                      </div>
                    </>
                  )}

                  <div className="mt-auto pt-4 border-t border-glass-border/50">
                    <div className="flex flex-wrap gap-2">
                      {((p as any).tools || (p.approach ? p.approach.split(', ') : [])).map((tool: string, i: number) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground border border-border/50 backdrop-blur-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="mt-auto pt-4 flex items-center gap-1 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity inline-flex"
                >
                  {(p as any).liveUrl ? "Visit Live App" : "View details"} <ExternalLink size={14} />
                </div>
              </motion.a>
            )})}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
