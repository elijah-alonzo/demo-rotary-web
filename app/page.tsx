import Nav from "./nav";
import ProjectsSection from "./projects/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <main className="pb-8 pt-2">
        <ProjectsSection />
      </main>
    </div>
  );
}
