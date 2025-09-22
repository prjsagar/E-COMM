import { useState } from 'react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center my-6">
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded ${
              page === currentPage ? 'bg-cyan-400 text-white' : 'bg-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
