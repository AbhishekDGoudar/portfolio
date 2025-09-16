import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// ✅ Import logos from @assets
import utaLogo from "@/assets/logo/University_of_Texas_at_Arlington.png";
import voiroLogo from "@/assets/logo/voiro_logo.svg";
import travelderLogo from "@/assets/logo/assystant_logo.svg";
import csirNalLogo from "@/assets/logo/CSIR_nal_logo.png";

const ExperienceCard = ({ logo, alt, company, roles, stack, respSummary, points }) => {
  const techs = Array.isArray(stack)
    ? stack
    : String(stack).split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <div
      className="
        p-6 rounded-xl border border-black bg-[#f5f5dc] 
        hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] 
        transition-all text-center
      "
    >
      {/* Logo */}
      <img
        src={logo}
        alt={alt}
        className="w-[7em] h-[7em] object-contain mx-auto mb-3"
      />

      {/* Company */}
      <h3 className="text-xl font-bold mb-2 text-gray-900">{company}</h3>

      {/* Roles */}
      <div className="text-gray-800 text-sm">
        {roles.map((r) => (
          <div key={`${r.title}-${r.tenure}`} className="mb-2">
            <p className="font-medium">{r.title}</p>
            <p>Tenure: {r.tenure}</p>
          </div>
        ))}
      </div>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {techs.map((tech, idx) => (
          <span
            key={idx}
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

      {/* Summary */}
      <p className="text-gray-800 text-sm">
        <span className="font-semibold">Responsibilities:</span> {respSummary}
      </p>

      {/* Details */}
      <div className="mt-4 text-gray-700 text-sm text-left max-w-2xl mx-auto">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
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
        "Enhanced edge recommendation in Orion, a visual query builder, by fine-tuning and integrating LLMs (Phi-4, LLaMA 3.2, Qwen).",
        "Built a model evaluation framework on MLflow with standardized metrics for 200+ models.",
        "Saved 10+ hours/week by automating real-time data extraction and inference triggers.",
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
        "Designed and developed a revenue reconciliation engine for OTT clients (Disney+ Hotstar, DStv), scaling to 100K+ ad line items/day.",
        "Built recommendation systems optimizing ad inventory and boosting fill rates by 15%.",
        "Containerized and orchestrated microservices with Docker, reducing deployment time and failures by 20%.",
        "Improved data retrieval speed by 17% via caching layers (Redis) and async messaging.",
        "Developed a cross-platform notification system with FCM, handling 30K+ push notifications/day.",
        "Managed AWS deployments and optimized Athena queries for reporting pipelines.",
        "Mentored 4+ engineers, improving delivery velocity by 10%.",
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
        "Improved user engagement by 15% with NLP-driven chatbots.",
        "Delivered Django–Angular applications improving operational efficiency.",
        "Introduced Agile Scrum, leading weekly meetups.",
        "Designed and implemented an OCR-powered resume parser.",
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
      className="min-h-screen flex items-center justify-center py-20 bg-[#f5f5dc]"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-6">
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
