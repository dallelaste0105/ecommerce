import { StandardFunction } from "./connectionsConfig";

export function GetStoreProductsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "GET",
        route: "/storeRoute.php",
        whitchFunction: "showStoreProducts",
        body: body
    });
}

export function SellerGetStoreProductsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "GET",
        route: "/storeRoute.php",
        whitchFunction: "sellerShowStoreProducts",
        body: body
    });
}

export function AddProductPromotion({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "GET",
        route: "/storeRoute.php",
        whitchFunction: "addProductPromotion",
        body: body
    });
}

export function RemoveProductPromotion({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "GET",
        route: "/storeRoute.php",
        whitchFunction: "removeProductPromotion",
        body: body
    });
}