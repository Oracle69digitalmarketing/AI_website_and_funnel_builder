// File: /src/App.jsx import React, { useState } from 'react';

function App() { const [step, setStep] = useState(1); const [description, setDescription] = useState(''); const [loading, setLoading] = useState(false); const [sitePreview, setSitePreview] = useState(null);

const handleGenerate = () => { setLoading(true); setTimeout(() => { setSitePreview({ title: 'Handcrafted Leather Goods', tagline: 'Crafting Quality Wallets, Belts, and Bags', image: 'https://via.placeholder.com/150' }); setLoading(false); setStep(4); }, 2000); };

return ( <div className="p-8 font-sans min-h-screen bg-gray-50"> {step === 1 && ( <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"> <h1 className="text-2xl font-bold mb-4">Welcome to AI Website Builder</h1> <p className="mb-6 text-gray-600">Let AI create your website in seconds</p> <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button> </div> )}

{step === 2 && (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Describe your business</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., I sell handcrafted leather goods such as wallets, belts, and bags"
      />
      <button
        onClick={() => { setStep(3); handleGenerate(); }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >Generate</button>
    </div>

