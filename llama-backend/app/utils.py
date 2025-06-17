def sanitize_prompt(prompt: str) -> str:
    return prompt.strip().replace("\n", " ")
