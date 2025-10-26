import { HashRouter, Route, Routes } from 'react-router-dom'
import BusinessCard from './pages/BusinessCard.page'
import Home from './pages/Home.page'

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/business-card" element={<BusinessCard />} />
        {/* This wildcard ensures that any path (e.g. /watch, /about) renders Home */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
