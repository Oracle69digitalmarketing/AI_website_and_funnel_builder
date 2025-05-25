// File: /src/components/ExportHTML.jsx import React from 'react';

export default function ExportHTML({ data }) { const handleDownload = () => { const htmlContent = <html> <head> <title>${data.title}</title> <style> body { font-family: sans-serif; text-align: center; padding: 2rem; } img { max-width: 100%; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.2); } </style> </head> <body> <h1>${data.title}</h1> <p>${data.tagline}</p> <img src="${data.image}" alt="Preview Image" /> </body> </html>;

const blob = new Blob([htmlContent], { type: 'text/html' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'AI-Generated-Site.html';
link.click();

};

return ( <div className="text-center mt-6"> <button onClick={handleDownload} className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"> Download Site </button> </div> ); }

