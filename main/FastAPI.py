from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

myAPP = FastAPI() #creates app

item = []

class ITEM(BaseModel): # creates a structure type like in C
    Name:str = None
    Checked:bool = False

@myAPP.get("/") #When User visits this "/" root directory function is called.
def root():
    return "This is better than you"

# get to get the url that has visited , post to post https request by the user.

@myAPP.post('/items') #gets input from user via http request and proceeds the function
def create_iten(ans:ITEM)-> ITEM:
    item.append(ans)
    return item

@myAPP.get('/items/{item_id}')
def show_item(item_id: int) -> str:
    if item_id > len(item):
        item_name = item[item_id]
        return item_name
    else:
        raise HTTPException(status_code=404 , detail=f"The item {item_id} was not found.") #raise 404 error as file not found error.

@myAPP.get('/items')
def list_items(lim : int = 10) -> list:
    return item[:lim]