import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Influence Detection in Social Networks",
    description:
      "Identify the most influential users in social networks using graph analytics and Graph Neural Networks (GNNs).",
    badges: ["Graph Analytics", "Graph Neural Networks", "Social Networks"],
    links: [],
    variant: "glass",
  },
  {
    title: "Community Assistant",
    description:
      "RAG-based assistant for online communities using DistilBERT and DPR with domain-specific fine-tuning.",
    badges: ["RAG", "DistilBERT", "DPR", "NLP"],
    links: [],
    variant: "glass",
  },
  {
    title: "Paris Olympics 2024",
    description:
      "The Paris 2024 Olympic Summer Games dataset offers detailed insights into the event, covering participating countries, age groups, and gender distribution. Explore trends through interactive visualizations.",
    badges: ["EDA", "Visualization", "Tableau"],
    links: [
      {
        label: "Visualization",
        href: "https://public.tableau.com/app/profile/abhishek.divakar.goudar/viz/OlympicsViz_17287785127600/Medals?publish=yes",
      },
      {
        label: "Dataset",
        href: "https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games",
      },
    ],
    variant: "plain",
  },
  {
    title: "House Sales Trends",
    description:
      "Real estate insights for King County, WA—explore patterns in pricing, locations, and other key factors via interactive visualizations.",
    badges: ["EDA", "Visualization", "Tableau"],
    links: [
      {
        label: "Visualization",
        href: "https://public.tableau.com/app/profile/abhishek.divakar.goudar/viz/OlympicsViz_17287785127600/Medals?publish=yes",
      },
      {
        label: "Dataset",
        href: "https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games",
      },
    ],
    variant: "glass",
  },
  {
    title: "Walmart Sales",
    description:
      "Enhance forecasting capabilities by using Weekly Sales to predict Walmart store demands across the U.S., including the impact of holidays.",
    badges: ["EDA", "Hypothesis Testing", "Multiple Linear Regression", "Optimization"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbhishekDGoudar/Kaggle_walmart_sales_prediction",
      },
      { label: "Dataset", href: "https://www.kaggle.com/datasets/yasserh/walmart-dataset" },
    ],
    variant: "glass",
  },
  {
    title: "Airline Satisfaction",
    description:
      "Analyze air travel passenger experience and identify key drivers of satisfaction using ML and data analysis.",
    badges: ["EDA", "Classification", "Optimization"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbhishekDGoudar/Kaggle_airline_satisfaction",
      },
      {
        label: "Dataset",
        href: "https://www.kaggle.com/datasets/teejmahal20/airline-passenger-satisfaction",
      },
    ],
    variant: "glass",
  },
  {
    title: "Maximum Power Point Tracker",
    description:
      "Particle Swarm Optimization–assisted MPPT algorithm to improve photovoltaic system efficiency.",
    badges: ["Algorithm Development", "PSO", "Optimization"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbhishekDGoudar/Particle-Swarm-Optimization-Based-Maximum-Power-Point-Tracker-Algorithm",
      },
    ],
    variant: "glass",
  },
];

function ProjectCard({ title, description, badges, links }) {
  return (
    <div
      className="
        p-6 rounded-xl border border-black bg-[#f5f5dc] 
        hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] 
        transition-all
      "
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {badges.map((tech, key) => (
          <span
            key={key}
            className="
              bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-700
              py-1 px-3 rounded-full text-sm
              transition hover:bg-blue-200/40 hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(0,0,0,0.25)]
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 text-center transition-colors my-1 underline-offset-2 hover:underline"
              aria-label={`Open ${title} - ${l.label}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[#f5f5dc]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
