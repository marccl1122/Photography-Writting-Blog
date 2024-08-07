import React from 'react';
import Styles from './styles/globals.css';


function App() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
        <a className="text-2xl font-bold" href="#" rel="ugc">
          Photography Blog
        </a>
        <nav className="hidden md:flex gap-4">
          <a className="text-sm font-medium hover:underline" href="#" rel="ugc">
            Home
          </a>
          <a className="text-sm font-medium hover:underline" href="#" rel="ugc">
            Photography
          </a>
          <a className="text-sm font-medium hover:underline" href="#" rel="ugc">
            Tutorials
          </a>
          <a className="text-sm font-medium hover:underline" href="#" rel="ugc">
            About
          </a>
          <a className="text-sm font-medium hover:underline" href="#" rel="ugc">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div aria-roledescription="carousel" className="relative rounded-lg overflow-hidden" role="region">
              <div className="overflow-hidden">
                <div className="flex -ml-4" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                  <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                    <img
                      src="/placeholder.svg"
                      width="1200"
                      height="600"
                      alt="Hero Image"
                      className="object-cover w-full aspect-[2/1]"
                    />
                  </div>
                  <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                    <img
                      src="/placeholder.svg"
                      width="1200"
                      height="600"
                      alt="Hero Image"
                      className="object-cover w-full aspect-[2/1]"
                    />
                  </div>
                  <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                    <img
                      src="/placeholder.svg"
                      width="1200"
                      height="600"
                      alt="Hero Image"
                      className="object-cover w-full aspect-[2/1]"
                    />
                  </div>
                </div>
              </div>
              <button
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
                disabled=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left h-4 w-4"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>
              <button className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-8">
              <article className="group">
                <a className="block rounded-lg overflow-hidden" href="#" rel="ugc">
                  <img
                    src="/placeholder.svg"
                    width="640"
                    height="360"
                    alt="Blog Post Image"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold">
                    <a className="hover:underline" href="#" rel="ugc">
                      Capturing the Essence: A Photographer's Journey
                    </a>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                    tincidunt, risus in augue luctus, venenatis nisl id, porttitor neque. Quisque adipiscing erat id
                    nibh semper vel.
                  </p>
                  <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#" rel="ugc">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
              <article className="group">
                <a className="block rounded-lg overflow-hidden" href="#" rel="ugc">
                  <img
                    src="/placeholder.svg"
                    width="640"
                    height="360"
                    alt="Blog Post Image"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold">
                    <a className="hover:underline" href="#" rel="ugc">
                      Mastering the Art of Light: A Photographer's Guide
                    </a>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                    tincidunt, risus in augue luctus, venenatis nisl id, porttitor neque. Quisque adipiscing erat id
                    nibh semper vel.
                  </p>
                  <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#" rel="ugc">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
              <article className="group">
                <a className="block rounded-lg overflow-hidden" href="#" rel="ugc">
                  <img
                    src="/placeholder.svg"
                    width="640"
                    height="360"
                    alt="Blog Post Image"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold">
                    <a className="hover:underline" href="#" rel="ugc">
                      From Novice to Pro: A Photographer's Evolution
                    </a>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                    tincidunt, risus in augue luctus, venenatis nisl id, porttitor neque. Quisque adipiscing erat id
                    nibh semper vel.
                  </p>
                  <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#" rel="ugc">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
            <aside className="col-span-1 space-y-8">
              <div className="group">
                <a className="block rounded-lg overflow-hidden" href="#" rel="ugc">
                  <img
                    src="/placeholder.svg"
                    width="320"
                    height="180"
                    alt="Sidebar Post Image"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-bold">
                    <a className="hover:underline" href="#" rel="ugc">
                      Capturing the Essence: A Photographer's Journey
                    </a>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                    tincidunt, risus in augue luctus, venenatis nisl id, porttitor neque.
                  </p>
                  <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#" rel="ugc">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="group">
                <a className="block rounded-lg overflow-hidden" href="#" rel="ugc">
                  <img
                    src="/placeholder.svg"
                    width="320"
                    height="180"
                    alt="Sidebar Post Image"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-bold">
                    <a className="hover:underline" href="#" rel="ugc">
                      Mastering the Art of Light: A Photographer's Guide
                    </a>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                    tincidunt, risus in augue luctus, venenatis nisl id, porttitor neque.
                  </p>
                  <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#" rel="ugc">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-8 text-center text-sm">
          &copy; 2023 Photography Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
