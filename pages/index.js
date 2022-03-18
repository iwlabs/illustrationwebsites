import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-40 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center max-w-5xl mx-auto">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Next.js gives you the best developer experience with all the
              features you need for production: hybrid static & server
              rendering, TypeScript support, smart bundling, route pre-fetching,
              and more. No config needed.
            </p>
            <div class="max-w-md mx-auto grid sm:grid-cols-2 gap-4">
              <Link href="">
                <button
                  type="button"
                  class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started
                </button>
              </Link>
              <Link href="">
                <button
                  type="button"
                  class="inline-flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
