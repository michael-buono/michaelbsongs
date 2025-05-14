import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'

export function Router() {
  return (
    <HashRouter>
      <Routes>
        {/* This wildcard ensures that any path (e.g. /watch, /about) renders Home */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
