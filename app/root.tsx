import { Links, Meta, Outlet, Scripts } from "@remix-run/react"
import Navbar from './components/navbar'

function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}

export default App
