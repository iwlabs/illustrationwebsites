import Link from "next/link";
import { BookmarkAltIcon, CodeIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <section className="pt-40 pb-24 bg-gradient-to-b to-white from-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center lg:max-w-5xl mx-auto">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Next.js gives you the best developer experience with all the
              features you need for production: hybrid static & server
              rendering, TypeScript support, smart bundling, route pre-fetching,
              and more. No config needed.
            </p>
            <div className="max-w-md mx-auto grid sm:grid-cols-2 gap-4">
              <Link href="">
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started
                </button>
              </Link>
              <Link href="">
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-24 lg:mt-32 max-w-xl lg:max-w-full mx-auto">
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">500+ Examples</h2>
                <p className="text-slate-500">
                  Beautifully designed, expertly crafted components that follow
                  all accessibility best practices and are easy to customize.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">React, Vue, and HTML</h2>
                <p className="text-slate-500">
                  Accessible, interactive examples for React and Vue powered by
                  Headless UI, plus vanilla HTML if you’d rather write any
                  necessary JS yourself.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">Fully Responsive</h2>
                <p className="text-slate-500">
                  Every example is fully responsive and carefully designed and
                  implemented to look great at any screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Leverage World-Class Talent
            </h2>
            <p className="text-lg text-slate-500">
              We are the globally-distributed network of top business, design,
              and technology talent, ready to tackle your most important
              initiatives.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-16 max-w-xl lg:max-w-full mx-auto">
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 1
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 2
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 3
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 place-items-center">
            <div className="space-y-8">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From planning to execution, and beyond
              </h2>
              <p className="text-lg text-slate-500">
                When you have a concept, the next step is to locate the right
                technology partner to help you bring it to life. Our team of
                developers, software architects, project managers, and other
                experts are all equipped with advanced and up-to-date skill sets
                to meet the unique requirements of your project. We are a
                full-service software development business that understands the
                importance of long-term partnerships and is capable of combining
                concentrated detail-oriented activity with long-term strategic
                thinking.
              </p>
            </div>
            <div className="flex items-center justify-center relative">
              <img src="https://mghsolutions.ca/img/home/slider-2.png" className="object-scale-down" width={600} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
