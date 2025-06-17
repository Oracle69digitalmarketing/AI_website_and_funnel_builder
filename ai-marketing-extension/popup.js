document.getElementById("generate").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const resBox = document.getElementById("result");

  resBox.textContent = "Generating...";

  const res = await fetch("https://ai-website-and-funnel-builder.onrender.com/generate-funnel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  resBox.textContent = data.choices?.[0]?.text || JSON.stringify(data, null, 2);
});
