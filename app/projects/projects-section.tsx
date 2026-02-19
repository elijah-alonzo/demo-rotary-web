import { Search } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
  {
    id: 2,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
  {
    id: 3,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
  {
    id: 4,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
  {
    id: 5,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
  {
    id: 6,
    title: "Clearer vision for better learning",
    description:
      "Eye testing and distribution of 300 prescription eye glasses to 5 schools in rural communities",
    location: "Nigeria",
    startDate: "01 October 2025",
    endDate: "16 October 2025",
    language: "English",
  },
];

export default function ProjectsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-[#0C4C9B] md:text-[2rem]">
            Browse Projects
          </h1>
          <p className="mt-1 text-base text-slate-700">
            Browse or search projects using one or more of the filters listed.
          </p>
        </div>

        <div className="relative w-full md:max-w-sm lg:max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder=""
            aria-label="Search projects"
            className="h-10 w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[#0057B8]/30"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href="/projects/project-details"
            className="block"
          >
            <Card className="gap-0 overflow-hidden rounded-2xl border border-slate-200 py-0 transition hover:border-[#0C4C9B]/40">
              <img
                src="/test.jpg"
                alt="Project image"
                className="w-full h-32 object-cover"
              />
              <CardContent className="space-y-2.5 p-4">
                <CardTitle className="text-xl font-semibold leading-snug text-[#0C4C9B]">
                  {project.title}
                </CardTitle>

                <p className="text-sm leading-relaxed text-slate-700">
                  {project.description}
                </p>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#0C4C9B] px-2 py-0.5 text-xs font-semibold text-white">
                    Completed
                  </span>
                  <span className="rounded-full bg-[#0C4C9B] px-2 py-0.5 text-xs font-semibold text-white">
                    Intermediate
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-500 sm:text-sm">
                  <p>Location: {project.location}</p>
                  <p>
                    Start date: {project.startDate} | End date:{" "}
                    {project.endDate}
                  </p>
                  <p>Project Language: {project.language}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
