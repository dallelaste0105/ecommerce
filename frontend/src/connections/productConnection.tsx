import { StandardFunction } from "./connectionsConfig";

export function CreateProductConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "createProduct",
        body: body
    });
}

export function AddProductCartConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "addProductCart",
        body: body
    });
}

export function ShowProductDetailsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "getProductDetails",
        body: body
    });
}

export function PublicProductRateConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "publicProductRate",
        body: body
    });
}

export function GetProductCommentsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "getProductComments",
        body: body
    });
}

export function GetStoreSearchedProductsConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/productRoute.php",
        whitchFunction: "getStoreSearchedProducts",
        body: body
    });
}

