import React from 'react';

const Tags = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Tags</h3>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Photography</a>
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Landscape</a>
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Portrait</a>
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Nature</a>
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Street</a>
          <a className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" href="#">Travel</a>
        </div>
      </div>
    </div>
  );
};

export default Tags;
