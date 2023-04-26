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
   {isHydrated ? <body className="px-4 lg:px-48" data-theme={themStore.mode}>{children}</body> : <body></body>}
   </>
  )
}

export default Hydrate;