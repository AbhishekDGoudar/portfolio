import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import utaLogo from "@/assets/logo/University_of_Texas_at_Arlington.png";
import voiroLogo from "@/assets/logo/voiro_logo.svg";
import travelderLogo from "@/assets/logo/assystant_logo.svg";
import csirNalLogo from "@/assets/logo/CSIR_nal_logo.png";

const ExperienceCard = ({ logo, alt, company, roles, stack, respSummary, points }) => {
  const techs = Array.isArray(stack) ? stack : String(stack).split(",").map(s => s.trim()).filter(Boolean);

  return (
    <div className="p-5 sm:p-6 rounded-xl border border-black bg-[#f5f5dc] hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all text-center">
      <img src={logo} alt={alt} className="w-20 h-20 sm:w-[7em] sm:h-[7em] object-contain mx-auto mb-3" />
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{company}</h3>

      <div className="text-gray-800 text-sm">
        {roles.map(r => (
          <div key={`${r.title}-${r.tenure}`} className="mb-2">
            <p className="font-medium">{r.title}</p>
            <p>Tenure: {r.tenure}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {techs.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-700 py-1 px-3 rounded-full text-sm transition hover:bg-blue-200/40 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-800 text-sm">
        <span className="font-semibold">Responsibilities:</span> {respSummary}
      </p>

      <div className="mt-4 text-gray-700 text-sm text-left max-w-2xl mx-auto">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
      </div>
    </div>
  );
};


export const Experience = () => {
  const experiences = [
    {
      company: "University of Texas at Arlington",
      alt: "UT Arlington",
      logo: utaLogo,
      roles: [
        { title: "Software Engineer AI/ML (Graduate Research Assistant)", tenure: "Jan 2024 – Present" },
      ],
      stack: ["TensorFlow", "Spark", "SpringBoot", "Neo4j", "Airflow", "Tableau", "Kubernetes"],
      respSummary: "Research and applied machine learning in knowledge graphs and query systems.",
      points: [
        "Co-author of “A Knowledge Graph Informing Soil Carbon Modeling” (ICWE 2025); designed ontologies and developed supporting web tools.",
        "Enhanced edge recommendation in Orion, a visual query builder, by fine-tuning and integrating LLMs (Phi-4, LLaMA 3.2, Qwen) to improve query formulation.",
        "Built a model evaluation framework on MLflow, integrating standardized metrics (accuracy, F1-score, AUC) and experiment tracking for 200+ models; improved reproducibility, cross-team visibility, and accelerated model comparisons across pipelines.",
        "Saved 10+ hours/week by automating triggers for real-time data extraction and inference, and developed a platform that unified project assets to improve experimentation efficiency.",
      ],
    },
    {
      company: "Voiro Technologies Private Limited",
      alt: "Voiro",
      logo: voiroLogo,
      roles: [
        { title: "Lead Software Development Engineer", tenure: "Feb 2019 – May 2023" },
      ],
      stack: ["Python", "Django", "Angular", "PostgreSQL", "Redis", "Kafka", "AWS", "Terraform"],
      respSummary: "Led full-stack development, system architecture, and high-scale revenue systems.",
      points: [
        " Led design and development of a revenue reconciliation engine for OTT clients (Disney+ Hotstar, DStv), scaling to 100K+ ad line items per day with 98% accuracy, supporting over $1M in weekly ad revenue.",
        " Collaborated with product/data teams to build recommendation systems, optimizing ad inventory and boosting fill rates by 15%.",
        " Containerized and orchestrated microservices using Docker to resolve scalability bottlenecks, reducing deployment time and failure rates by 20% while improving resource utilization and service uptime.",
        " Improved data retrieval speed by 17% by implementing caching layers for latency-critical services using Redis and asynchronous messaging via RabbitMQ, enhancing system responsiveness and throughput.",
        " Developed a serverless, cross-platform notification system using Firebase Cloud Messaging, enabling real-time, cross-platform push notifications (30,000 notification/day) and reducing delivery latency by 2ms/notification.",
        " Managed AWS EC2, RDS, S3 deployments and optimized AWS Athena queries to support real-time reporting pipelines.",
        " Mentored 4+ engineers through the SDLC, standardized code quality practices & use of development tools improving team delivery velocity by 10%.",
      ],
    },
    {
      company: "Travelder (now Assystant)",
      alt: "Travelder",
      logo: travelderLogo,
      roles: [{ title: "Software Engineer", tenure: "Feb 2018 – Feb 2019" }],
      stack: ["Django", "Angular", "PostgreSQL", "Rasa", "AWS", "Terraform", "Docker"],
      respSummary: "Full-stack development of B2C platforms with NLP-driven automation.",
      points: [
        " Improved user engagement by 15% through end-to-end development of NLP-driven conversational chatbots for B2C platforms.",
        " Developed full-stack Django–Angular apps for B2C clients, improving operational efficiency and accelerating revenue growth.",
        " Introduced Agile Scrum, fostering weekly meetups that boosted knowledge exchange & team productivity.",
        " Designed and implemented OCR-powered resume parser, automating applicant data extraction and improving recruitment efficiency by 8%.",
      ],
    },
    {
      company: "CSIR-National Aerospace Laboratories",
      alt: "CSIR-NAL",
      logo: csirNalLogo,
      roles: [{ title: "Research Intern", tenure: "Jan 2017 - July 2017" }],
      stack: ["Python", "C", "Matlab"],
      respSummary: "Algorithm Development, Optimization, Data Collection & Analysis",
      points: [
        "Implemented traditional and adaptive MPPT algorithms for photovoltaic arrays.",
        "Collected and analyzed sensor outputs and PV array power data.",
        "Built MATLAB/Simulink models showing ~15% improved MPPT via PSO.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#f5f5dc] py-16 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:gap-6">
            {experiences.map((exp) => (
              <RevealOnScroll key={exp.company}>
                <ExperienceCard {...exp} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
