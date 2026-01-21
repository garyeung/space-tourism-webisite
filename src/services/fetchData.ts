import data from "@/data.json"

export interface IData {
    "destinations": {
        "name": string,
        "images": {
            "png": string,
            "webp": string
        },
        "description": string,
        "distance": string,
        "travel": string
    }[],
    "crew": {
        "name": string,
        "images": {
            "png": string,
            "webp": string
        },
        "role": string,
        "bio": string
    }[],
    "technology": {
        "name": string,
        "images": {
            "portrait": string,
            "landscape": string
        },
        "description": string
    }[]

} 

export const fetchData = async (): Promise<IData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 100)  // simulate network  fetching
    })
}