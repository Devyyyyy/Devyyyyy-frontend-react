import React, { useEffect, useState } from "react"
import {Route, Routes, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

type Props = {
    children: JSX.Element | JSX.Element[];
};


export default function CustomRoutes({children}: Props ){
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if(location.pathname===prevLoc){
            setPrevLoc('')
            //thanks to ankit sahu
        }
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])

    return (
        <div>
            {progress && <TopBarProgress />}
            <Routes>{children}</Routes>
        </div>
    )
}