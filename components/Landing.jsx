import Link from "next/link";

export default function Landing() {
  return (
    <article>
      <div className="relative">
        <div className=" relative mx-auto px-4 ">
          <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
              <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                আমি বাংলায় ভালোবাসি <br /> আমি বাংলাকে ভালোবাসি
              </h1>

              <p className="mt-6 text-base leading-7 text-slate-700">
                Developers On Rocket
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/docs/introduction"
                  className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
