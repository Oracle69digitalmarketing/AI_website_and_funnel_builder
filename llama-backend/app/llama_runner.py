from llama_cpp import Llama

# Load model (make sure model file is downloaded to /models directory)
llm = Llama(model_path="./models/llama-2-7b-chat.gguf")

def generate_response(prompt: str, max_tokens: int = 200):
    output = llm(prompt, max_tokens=max_tokens, stop=["</s>"])
    return output["choices"][0]["text"]
