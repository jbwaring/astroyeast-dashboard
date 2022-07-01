import { useState } from 'react'
import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState()
  return <Component {...pageProps} user={user} setUser={setUser}/>
}

export default MyApp
