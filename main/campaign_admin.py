from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #to let data from any site be accepted
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import pymongo

# create a MongoDB client and collection so the import is used and the app can store data
MONGO_DETAILS ="mongodb://localhost:27017/"
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client["hack4impact"]
campaigns = db["campaigns"]

app =FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your production domain (e.g., your github.io link) later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class payload(BaseModel): #structure
    t:str
    l:str
    i:str
    d:str
    li:str

@app.post('/api/campaign')
async def campaign_data(data: payload):
    cdb = data.model_dump()
    result = await campaigns.insert_one(cdb)
    if "_id" in cdb:
        cdb["_id"] = str(cdb["_id"])
    
    existing_dbs = await client.list_database_names()
    print("📢 REAL-TIME DATABASES IN MONGODB:", existing_dbs)

    return {
        "status": "success", 
        "inserted_id": str(result.inserted_id)
    }

@app.get('/api/campaign')
def get_campaign():
    return "this is the campaign"