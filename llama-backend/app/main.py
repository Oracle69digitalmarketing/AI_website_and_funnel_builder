from fastapi import FastAPI, Request
from app.llama_runner import generate_response

app = FastAPI()

@app.post("/v1/completions")
async def complete(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")
    max_tokens = data.get("max_tokens", 200)

    response_text = generate_response(prompt, max_tokens)
    return {
        "choices": [{"text": response_text}]
    }
