import "./globals.css"
import { Space_Grotesk } from "next/font/google"

import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Ines Gaaloul - Full Stack Developer",
  description: "Personal portfolio of Ines Gaaloul, a Full Stack Developer & a Software Engeniring Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
       
          {children}
        
      </body>
    </html>
  )
}

