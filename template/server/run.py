import uvicorn
from .webserver import app

def main():
    uvicorn.run(app, host="0.0.0.0", port=80)

if __name__ == "__main__":
    main()