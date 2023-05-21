'use client'
import { ReactNode, useEffect, useState } from "react";
import { useThemeStore } from "@/store";

const Hydrate = ({children} : {children: ReactNode}) => {
   const [isHydrated, setIsHydrated] = useState(false)
   const themStore = useThemeStore()
   useEffect(() => {
    setIsHydrated(true)
   }, [])
  return (
   <>
   {isHydrated ? <body data-theme={themStore.mode}>{children}</body> : <body></body>}
   </>
  )
}

export default Hydrate;