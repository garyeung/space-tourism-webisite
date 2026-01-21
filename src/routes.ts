import { appConfig } from "./app.config";

export const routes: {
    path: string,
    name: string
}[] = Object.keys(appConfig).map((key) => {
    return {
        name: key,
        path: appConfig[key as keyof typeof appConfig].path
    }
})