import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Brain, Bot, ExternalLink, Globe, Mic } from "lucide-react";

type Category = "all" | "analysis" | "ml" | "ai";

const projects = [
  {
    title: "MapenziLink",
    category: "ai" as Category,
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
    category: "ai" as Category,
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
    title: "Sales Performance Dashboard",
    category: "analysis" as Category,
    problem: "Fragmented sales data across multiple platforms making it impossible to track KPIs.",
    approach: "Python, SQL, Power BI",
    solution: "Built an interactive real-time dashboard consolidating all sales channels.",
    impact: "30% faster decision-making, identified underperforming regions.",
    icon: BarChart3,
    githubUrl: "#",
  },
  {
    title: "Customer Churn Prediction Model",
    category: "ml" as Category,
    problem: "High customer churn rate with no early warning system.",
    approach: "Python, Scikit-learn, Pandas",
    solution: "Developed a classification model predicting churn 30 days in advance.",
    impact: "Reduced churn by 18% through targeted retention campaigns.",
    icon: Brain,
    githubUrl: "https://github.com/Bonifacethuo/Phase-3-Project",
  },
  {
    title: "Automated Reporting Pipeline",
    category: "ai" as Category,
    problem: "Manual weekly reports consuming 15+ hours of analyst time.",
    approach: "Python, SQL, PyTorch",
    solution: "End-to-end automated pipeline from data extraction to report generation.",
    impact: "Saved 60+ hours/month, eliminated human error in reporting.",
    icon: Bot,
    githubUrl: "https://github.com/Bonifacethuo/Barbados-Lands-and-Surveys-Plot-Automation-Challenge-1",
  },
  {
    title: "Market Basket Analysis",
    category: "analysis" as Category,
    problem: "Retail client needed to understand product purchase patterns.",
    approach: "Python, Association Rules, Tableau",
    solution: "Applied Apriori algorithm to discover cross-selling opportunities.",
    impact: "15% increase in average basket value through strategic product placement.",
    icon: BarChart3,
    githubUrl: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    category: "ml" as Category,
    problem: "Brand needed real-time understanding of customer sentiment.",
    approach: "Python, NLP, BERT, Transformers",
    solution: "Built NLP pipeline analyzing social media and review sentiment.",
    impact: "Real-time sentiment tracking across 10K+ daily mentions.",
    icon: Brain,
    githubUrl: "https://github.com/Bonifacethuo/Jigsaw---Agile-Community-Rules-Classification",
  },
  {
    title: "AI Workflow Automation Suite",
    category: "ai" as Category,
    problem: "Repetitive business processes draining team productivity.",
    approach: "AI agents, API integrations, Python",
    solution: "Designed multi-agent AI workflows for content, data entry, and scheduling.",
    impact: "40% productivity increase across operations team.",
    icon: Bot,
    githubUrl: "#",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "analysis", label: "Data Analysis" },
  { key: "ml", label: "Machine Learning" },
  { key: "ai", label: "AI & Automation" },
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
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 hover-lift group flex flex-col h-full"
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

                <div className="space-y-3 text-sm flex-grow">
                  <div>
                    <span className="text-primary font-medium">Problem: </span>
                    <span className="text-muted-foreground">{p.problem}</span>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Tools: </span>
                    <span className="text-muted-foreground">{p.approach}</span>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Solution: </span>
                    <span className="text-muted-foreground">{p.solution}</span>
                  </div>
                  <div className="pt-2 border-t border-glass-border">
                    <span className="text-accent font-semibold">Impact: </span>
                    <span className="text-foreground">{p.impact}</span>
                  </div>
                </div>

                <a
                  href={(p as any).liveUrl || p.githubUrl}
                  target={((p as any).liveUrl || p.githubUrl) !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 flex items-center gap-1 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer inline-flex"
                >
                  {(p as any).liveUrl ? "Visit Live App" : "View details"} <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
