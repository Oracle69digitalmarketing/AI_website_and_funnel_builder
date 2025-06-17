from llama_cpp.server import LlamaServer

server = LlamaServer(
    model_path="./models/llama-2-7b.Q4_0.gguf",
    host="0.0.0.0",
    port=10000
)
server.run()
