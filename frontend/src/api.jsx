const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function getHomeMessage() {
    const response = await fetch(`${API_BASE_URL}/`);

    if (!response.ok){
        throw new Error("failed to connect to the django API server!")
    }

    return response.json();
}

export async function getAboutMessage(){
    const response = await fetch(`${API_BASE_URL}/about`);

    if(!response.ok){
        throw new Error("failed to connect to the django API server!")
    }
    return response.json();
}