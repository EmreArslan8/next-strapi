import React, { ReactNode } from 'react'
import "./globals.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout