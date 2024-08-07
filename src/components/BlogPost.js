import React from 'react';

const BlogPost = ({ title, description }) => {
  return (
    <article className="group">
      <a className="block rounded-lg overflow-hidden" href="#" aria-labelledby="blog-post-title">
        <img
          src="/placeholder.svg"
          width="640"
          height="360"
          alt="Blog Post Image"
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
        />
      </a>
      <div className="mt-4 space-y-2">
        <h2 className="text-2xl font-bold" id="blog-post-title">
          <a className="hover:underline" href="#">
            {title}
          </a>
        </h2>
        <p className="text-muted-foreground line-clamp-3">
          {description}
        </p>
        <a className="inline-flex items-center gap-1 text-primary font-medium hover:underline" href="#">
          Read more
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogPost;
