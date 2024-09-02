import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Chrome Extension</h1>
      <p className="text-neutral-600">This is the home page of your extension.</p>
      <p className="text-neutral-600 mt-4">This is extension created using <b>React</b> + <b>Tailwind CSS</b> using <b>Webpack</b>. It also support <b>React-router-dom</b>.</p>
      <p className="text-neutral-600 mt-12">by <a target='_blank' href="https:///kartic.online" className="mt-4 text-bold text-blue-500 hover:text-blue-600">Kartic</a></p>
    </div>
  );
}

export default Home;