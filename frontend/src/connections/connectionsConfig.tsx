import api from "../api"

export async function StandardFunction({
    requestType,
    route,
    whitchFunction,
    body
}: {
    requestType: string,
    route: string,
    whitchFunction?: string,
    body: Record<string, any>
}) {
    try {
        if (requestType === "GET") {
            const res = await api.get(route, {headers:{"whitchFunction":whitchFunction}});
            console.log(res.data);
            return res.data;
        }
        
        const res = await api.post(route, { whitchFunction, body });
        console.log(res.data);
        return res.data;
    }
    catch (error) {
    console.error("StandardFunction error:", error);
    return false;
}    
}