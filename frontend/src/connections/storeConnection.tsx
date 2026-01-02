import { StandardFunction } from "./connectionsConfig";

export function GetStoreProductsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "GET",
        route: "/storeRoute.php",
        whitchFunction: "showStoreProducts",
        body: body
    });
}