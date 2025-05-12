

# filename: main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import requests



app = FastAPI()

class Numbers(BaseModel):
    value : str


from dotenv import load_dotenv
import os

load_dotenv() 


access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU4NzY0LCJpYXQiOjE3NDcwNTg0NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjExZGYxMGU5LTMyYTYtNGMyOS05NTY4LTc1ZTI1MTdhNmFjNyIsInN1YiI6ImFkYXJzaHMyMDIzQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImFkYXJzaHMyMDIzQGdtYWlsLmNvbSIsIm5hbWUiOiJhZGFyc2ggc3VkaGVlciIsInJvbGxObyI6ImFtLmVuLnU0Y3NlMjIyMTAiLCJhY2Nlc3NDb2RlIjoiU3d1dUtFIiwiY2xpZW50SUQiOiIxMWRmMTBlOS0zMmE2LTRjMjktOTU2OC03NWUyNTE3YTZhYzciLCJjbGllbnRTZWNyZXQiOiJ1aG54Zlp2d2RTRHZrdXRDIn0.4-Idn8jgfWkzru09DnsyCiPFX731p7rbKRnQdJw0l6k"

@app.post("/average")
def calculate_average(num:Numbers):
    if not num.value:
        raise HTTPException(status_code=400, detail="m not provided")
    
    data_fetch = requests.get(f"http://20.244.56.144/evaluation-service/stocks/NVDA?minutes={num.value}",
                             headers=
                             {
                                  "Authorization": f"Bearer {access_token}"
                             }
                             )


    data = data_fetch.json()


    return data








