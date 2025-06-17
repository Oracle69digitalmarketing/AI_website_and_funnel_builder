#!/bin/bash

# Run FastAPI with Uvicorn
uvicorn app.main:app --host 0.0.0.0 --port 8000
