import { motion } from "framer-motion";

const videos = [
  {
    title: "Excellent Choice Land Investment",
    embed: "https://www.youtube.com/embed/CBWvZtAa_Kg",
    description: "AI-generated promotional video designed to showcase real estate opportunities and attract potential investors through clear, engaging messaging.",
    tags: ["Real Estate", "AI Video", "Marketing"]
  },
  {
    title: "Monross Hardware",
    embed: "https://www.youtube.com/embed/OMU49Qz3OTg",
    description: "AI-powered product marketing video highlighting hardware products to increase visibility and customer engagement.",
    tags: ["Retail", "AI Marketing", "Product Ads"]
  },
  {
    title: "Oloitoktok Campaign",
    embed: "https://www.youtube.com/embed/_Njs_TRgdqk",
    description: "A location-based promotional video using AI to present local opportunities and drive awareness through storytelling.",
    tags: ["Location Marketing", "AI Video", "Branding"]
  },
  {
    title: "Tosh Baby Shop",
    embed: "https://www.youtube.com/embed/5XDLqEfVyf4",
    description: "AI-generated ad crafted to promote baby products with a warm, engaging tone that connects with target customers.",
    tags: ["E-commerce", "AI Ads", "Retail"]
  },
  {
    title: "Nilzan Supermarket",
    embed: "https://www.youtube.com/embed/LPNSqaJGcXQ",
    description: "AI marketing video designed to showcase supermarket products and attract customers through visual storytelling.",
    tags: ["Supermarket", "AI Marketing", "Ads"]
  },
  {
    title: "Vintage Mabati",
    embed: "https://www.youtube.com/embed/OaqvBugmEjY",
    description: "AI-powered promotional content highlighting construction materials with clear messaging and strong visual appeal.",
    tags: ["Construction", "AI Ads", "Product Marketing"]
  },
  {
    title: "OMO Campaign",
    embed: "https://www.youtube.com/embed/vBZ5n6p46po",
    description: "Creative AI-driven advertisement focused on brand awareness and engaging storytelling for consumer products.",
    tags: ["FMCG", "AI Marketing", "Branding"]
  }
];

const AIMarketingSection = () => {
  return (
    <section id="ai-marketing" className="section-padding bg-muted/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Video Marketing
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            AI Marketing & Automation in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I create AI-powered videos that help businesses capture attention, communicate value clearly, and increase engagement.
          </p>
          
          <div className="mt-8 inline-block p-5 rounded-2xl glass-card border border-primary/20 bg-primary/5 shadow-sm">
            <p className="text-foreground font-medium text-lg md:text-xl">
              <span className="font-semibold text-primary">Struggling to market your product?</span> I create AI-powered videos that capture attention and drive results.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden hover-lift group rounded-2xl flex flex-col border border-glass-border shadow-soft"
            >
              <div className="aspect-video w-full relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={video.embed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-card/50">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-grow leading-relaxed">
                  {video.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-glass-border">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
