import { StandardFunction } from "./connectionsConfig";

export function SignupConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/credentialRoute.php",
        whitchFunction: "signup",
        body: body
    });
}

export function LoginConnection({ body }: { body: Record<string, any> }) {
    return StandardFunction({
        requestType: "POST",
        route: "/credentialRoute.php",
        whitchFunction: "login",
        body: body
    });
}