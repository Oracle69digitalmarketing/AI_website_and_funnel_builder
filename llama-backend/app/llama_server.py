from fastapi import FastAPI, Request
import subprocess
from llama_cpp import Llama

app = FastAPI()

# Load your GGUF model (adjust path and settings as needed)
llm = Llama(
    model_path="./models/llama-2-7b-chat.gguf",
    n_ctx=2048,
    n_threads=8
)

@app.post("/v1/completions")
async def generate_text(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")
    max_tokens = data.get("max_tokens", 150)

    output = llm(prompt, max_tokens=max_tokens)
    return {
        "choices": [
            {
                "text": output["choices"][0]["text"]
            }
        ]
    }
