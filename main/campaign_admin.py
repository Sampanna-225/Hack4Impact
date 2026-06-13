from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import pymongo


MONGO_DETAILS ="mongodb://localhost:27017/"
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client["hack4impact"]
campaigns = db["campaigns"]
user_money = db["user_money"]
user = db["user"]

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

class CreditSchema(BaseModel):
    cid: str = '1'
    credit: int = 10000

class User(BaseModel):
    cid : str = '1'
    user : str
    em : str
    ps : str

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

@app.post('/api/credits')
async def add_credit(cred: CreditSchema):
    money = cred.model_dump()
    
    result = await user_money.insert_one(money)

    existing_dbs = await client.list_database_names()
    print("REAL-TIME DATABASES IN MONGODB:", existing_dbs)

    return {
        "status": "success", 
        "inserted_id": str(result.inserted_id)
    }

@app.get('/api/credits')
async def fetch_all_credits():
    cursor = user_money.find({})
    user_money_list = await cursor.to_list(length=100)

    for doc in user_money_list:
        doc['_id'] = str(doc['_id'])

    return user_money_list

@app.post('/api/user')
async def add_detail(data: User):
    detail = data.model_dump()

    result = await user.insert_one(detail)

    existing_dbs = await client.list_database_names()
    print("REAL-TIME DATABASES IN MONGODB:", existing_dbs)

    return {
        "status": "success", 
        "inserted_id": str(result.inserted_id)
    }

@app.get('/api/user')
async def get_detail():
    detail = user.find({})
    user_list = await detail.to_list(length=100)

    for doc in user_list:
        doc['_id'] = str(doc['_id'])

    return user_list