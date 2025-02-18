import { JSX } from "react"
import { AppPaths } from "./routes-enums"
import { lazy } from "react"

const SignIn = lazy(() => import('../Pages/Landing/Landing'))
const HelloPage = lazy(() => import('../Pages/Hello/Hello'))

interface IRoute {
    path: string
    component: JSX.Element
}

export const routes: IRoute[] = [
    {path: AppPaths.LOGIN, component: <SignIn />},
    {path: AppPaths.HELLOPAGE, component: <HelloPage />}
]