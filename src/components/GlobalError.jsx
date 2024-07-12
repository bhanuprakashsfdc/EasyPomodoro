import React from 'react';
import { useSelector } from 'react-redux';

function GlobalError() {
  const error = useSelector((state) => state.globalError.error);

  if (!error) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded">
      <p>{error}</p>
    </div>
  );
}

export default GlobalError;
