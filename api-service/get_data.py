import pandas as pd
import numpy as np

# import faiss
import re

# load the faiss index
# index = faiss.read_index('data/faiss_index')

# # load utility dataset
# features_df = pd.read_csv("data/features_subset_with_id.csv")
# features= features_df.set_index('dog_id')
# initialize dogs lists
def get_dogs(df, total):
    dogs = []
    for i, row in df.iterrows():
        dog_dict = {}
        dog_dict["id"] = row["AnimalInternal-ID"]
        dog_dict["name"] = row["AnimalName"]
        dog_dict["sex"] = row["AnimalSex"]
        dog_dict["photo_url"] = row["PhotoUrl"]
        colors = re.sub("[\(\)/,]", "", row["AnimalColor"])
        breed = re.sub("[\(\)/,]", "", row["AnimalBreed"])
        tags = colors + " " + breed
        dog_dict["tags"] = tags
        dog_dict["weight"] = row["AnimalCurrentWeightPounds"]
        dog_dict["breed"] = row["AnimalBreed"]
        dog_dict["color"] = row["AnimalColor"]
        dog_dict["dob"] = row["AnimalDOB"]
        dog_dict["memo_text"] = row["MemoText"]
        dogs.append(dog_dict)
    return dogs[:total]


# def get_similar_ids(dog_id, k=10):
#     # get the feature of query dog
#     xq = features.loc[dog_id].astype(np.float32)
#     D, I = index.search(np.array([xq]), k)
#     # get similar dog ids
#     similar_ids = features_df['dog_id'].iloc[I[0]].values
#     # return similar ids
#     return similar_ids
