import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from get_data import get_dogs  # , get_similar_ids

# load the dataset
df = pd.read_csv("data/dogs_subset.csv")

# initialize FastAPI
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/dogs/{total}")
def home(total: int):
    dogs = get_dogs(df, total)
    return dogs


@app.get("/dogs/{dog_id}")
def get_similar(dog_id: int):
    similar_ids = get_similar_ids(dog_id)
    similar_df = df[df["AnimalInternal-ID"].isin(similar_ids)]
    similar_dogs = get_dogs(similar_df)
    return {"data": similar_dogs}
