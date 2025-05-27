# backend\main.py
import requests
import rich
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware

# --------------------------------------------------------
app = FastAPI()

# --------------------------------
# Allow all CORS origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# --------------------------------------------------------

# Sanity configuration
PROJECT_ID = "3ixr4i2c"
DATASET = "production"
SANITY_API_URL = f"https://{PROJECT_ID}.api.sanity.io/v1/data/query/{DATASET}"

# --------------------------------------------------------
@app.get("/")
#  for all products
def get_function():
    QUERY = '*[_type == "product" && isFeatured == true]{ name,  description,  price,  image,  isBestSelling, isFeatured}'

    response = requests.get(SANITY_API_URL, params={"query": QUERY})
        # If the response status is OK (200), parse the JSON data
    if response.status_code == 200:
            result = response.json()
            # Print the data using Rich library
            rich.print("✅ Fetched Products:", result.get("result"))
            return result.get("result")
    else:
            # If the response status is not OK, print an error message
            rich.print("❌ Failed to fetch products:", response.status_code)
            return None
        
#  # ------------------------------- featured products --------------------------------------
@app.get("/featured_Products")
# for only featured products
def get_function():  # Ek function define kiya jo execute hoga jab yeh endpoint hit hoga
        QUERY = '*[_type == "product" && isFeatured == true]{ name,  description,  price,  image,  isBestSelling, isFeatured}'
        # Send GET request to Sanity API
        response = requests.get(SANITY_API_URL, params={"query": QUERY})
        
        # If the response status is OK (200), parse the JSON data
        if response.status_code == 200:
            result = response.json()
            # Print the data using Rich library
            rich.print("✅ Fetched Products:", result.get("result"))
            return result.get("result")
        else:
            # If the response status is not OK, print an error message
            rich.print("❌ Failed to fetch products:", response.status_code)
            return None





#  # ------------------------------------- is best selling --------------------------------
@app.get("/best_selling_Products")
# for only selling products
def get_function():  # Ek function define kiya jo execute hoga jab yeh endpoint hit hoga
        QUERY = '*[_type == "product" && isBestSelling == true]{ name,  description,  price,  image,  isBestSelling, isFeatured}'
        # Send GET request to Sanity API
        response = requests.get(SANITY_API_URL, params={"query": QUERY})
        
        # If the response status is OK (200), parse the JSON data
        if response.status_code == 200:
            result = response.json()
            # Print the data using Rich library
            rich.print("✅ Fetched Products:", result.get("result"))
            return result.get("result")
        else:
            # If the response status is not OK, print an error message
            rich.print("❌ Failed to fetch products:", response.status_code)
            return None


