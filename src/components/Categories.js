import React from 'react';

const Categories = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Categories</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          <li><a className="text-muted-foreground hover:text-foreground" href="#">Landscape Photography</a></li>
          <li><a className="text-muted-foreground hover:text-foreground" href="#">Portrait Photography</a></li>
          <li><a className="text-muted-foreground hover:text-foreground" href="#">Nature Photography</a></li>
          <li><a className="text-muted-foreground hover:text-foreground" href="#">Street Photography</a></li>
          <li><a className="text-muted-foreground hover:text-foreground" href="#">Travel Photography</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
