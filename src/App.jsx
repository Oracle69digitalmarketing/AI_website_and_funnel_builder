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
  )}

  {step === 3 && (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md text-center">
      <div className="animate-spin border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 mx-auto mb-4"></div>
      <p className="text-gray-700">Generating website...</p>
    </div>
  )}

  {step === 4 && sitePreview && (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Your Website Is Ready</h2>
      <h3 className="text-lg font-semibold">{sitePreview.title}</h3>
      <p className="text-gray-600 mb-4">{sitePreview.tagline}</p>
      <img src={sitePreview.image} alt="preview" className="rounded mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Publish Website</button>
    </div>
  )}
</div>

); }

export default App;

// File: /src/main.jsx import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App'; import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render( <React.StrictMode> <App /> </React.StrictMode> );

// File: /index.html

<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Website Builder</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>// File: /src/index.css @tailwind base; @tailwind components; @tailwind utilities;

body { font-family: 'Inter', sans-serif; }

    
