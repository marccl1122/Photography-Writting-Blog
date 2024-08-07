import React from 'react';

const AboutAuthor = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight" id="about-author-heading">About the Author</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
            <img className="aspect-square h-full w-full" alt="Author's profile picture" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold" id="author-name">John Doe</h3>
            <p className="text-muted-foreground" aria-labelledby="author-name">Photographer</p>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground">
          John Doe is a passionate photographer with a love for capturing the beauty of the world around him...
        </p>
        <div className="mt-4 flex gap-2">
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="Follow on Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="Follow on Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="Follow on LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
