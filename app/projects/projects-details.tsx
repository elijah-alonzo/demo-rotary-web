import { ArrowUpRight } from "lucide-react";
import Nav from "../nav";

export default function ProjectsDetails() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />

      <main className="pb-8 pt-4">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold leading-tight text-[#0C4C9B] md:text-[2rem]">
                Clearer vision for better learning
              </h1>

              <span className="rounded-full bg-[#F6B53E] px-2 py-0.5 text-xs font-semibold text-white">
                Completed
              </span>
              <span className="rounded-full bg-[#0C4C9B] px-2 py-0.5 text-xs font-semibold text-white">
                Intermediate
              </span>

              <button
                type="button"
                aria-label="Share project"
                className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0C4C9B] text-white md:h-9 md:w-9"
              >
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>

            <p className="text-base text-slate-700">
              Eye testing and distribution of 300 prescription eye glasses to 5
              schools in rural communities
            </p>
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <div className="grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-xl font-semibold leading-snug text-[#0C4C9B]">
                    Overview
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    The "CLEARER VISION FOR BETTER LEARNING" project was
                    inspired by the need to reach less privileged teachers and
                    students in rural communities who suffer eye defects and
                    cannot afford eye care and treatment. In partnership with
                    the Association of Optometrists, we visited 5 schools: Faith
                    Baptist School, Port Harcourt, Community Secondary School,
                    Rumuekini, Kalabari National College, Buguma, Kings College
                    of Commerce, and Community Secondary School, Ido. 300
                    students and teachers were tested and given prescription
                    glasses across these 5 schools.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src="/test.jpg"
                    alt="Project activity"
                    className="h-[182px] w-full rounded object-cover"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold leading-snug text-[#0C4C9B]">
                  Community Needs, Project Impact and Sustainability
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Community Assessment: How the project team learned about the
                  community&apos;s needs In a country where the minimum wage is
                  N80,000, access to healthcare is not free; most families in
                  rural communities would consider eye care as a luxury and
                  would rather manage the situation despite the fact that it
                  impedes the learning capacity of students. Motivated by this
                  knowledge we engaged a partnership with the Association of
                  Optometrists Nigeria, Rivers State chapter, who brought
                  doctors, equipment and other facilities at a grossly
                  discounted price. The club members embarked on a fundraising
                  campaign on our various networks, and we raised N5,400,000,
                  which enabled us to reach 300 students and teachers in 5
                  schools. to commemorate the world sight day, the doctors on
                  ground taught participants on the dos and don&apos;ts of eye
                  care.
                </p>
              </div>
            </div>

            <aside className="flex min-h-[420px] items-center justify-center bg-slate-100 text-center text-sm text-slate-500 lg:col-span-3">
              Advertisement Section?
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
