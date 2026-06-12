from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import pymongo
from bson import ObjectId

MONGO_DETAILS ="mongodb://localhost:27017/"
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client["hack4impact"]
campaigns = db["campaigns"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class payload(BaseModel):
    t: str
    l: str
    i: str
    d: str
    li: str
    c: str 

@app.post('/api/campaign')
async def campaign_data(data: payload):
    cdb = data.model_dump()
    result = await campaigns.insert_one(cdb)
    if "_id" in cdb:
        cdb["_id"] = str(cdb["_id"])
    
    existing_dbs = await client.list_database_names()
    print("REAL-TIME DATABASES IN MONGODB:", existing_dbs)

    return {
        "status": "success", 
        "inserted_id": str(result.inserted_id)
    }

@app.get('/api/campaign')
async def get_campaign():
    resev = campaigns.find({})
    campaigns_list = await resev.to_list(length=100)
    
    for doc in campaigns_list:
        if "_id" in doc:
            doc["_id"] = str(doc["_id"])
            
    return campaigns_list