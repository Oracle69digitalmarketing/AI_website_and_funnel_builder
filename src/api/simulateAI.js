// File: /src/api/simulateAI.js export const generateWebsitePreview = async (input) => { return new Promise((resolve) => { setTimeout(() => { resolve({ title: Welcome to ${input}, tagline: Empowering your digital presence effortlessly., image: https://source.unsplash.com/featured/?tech,business }); }, 2000); }); };

// File: /src/components/Preview.jsx import React from 'react';

export default function Preview({ data }) { return ( <div className="text-center p-6"> <h1 className="text-3xl font-bold mb-2">{data.title}</h1> <p className="text-lg text-gray-600 mb-4">{data.tagline}</p> <img src={data.image} alt="Preview" className="rounded-xl shadow-md w-full max-w-md mx-auto" /> </div> ); }

// File: /src/components/Publish.jsx import React from 'react';

export default function Publish() { return ( <div className="text-center py-10"> <h2 className="text-2xl font-semibold mb-4">Your AI site is ready!</h2> <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl"> Publish Now </button> </div> ); }

