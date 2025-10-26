import { HashRouter, Route, Routes } from 'react-router-dom'
import Shell from './components/Shell'
import BusinessCard from './pages/BusinessCard.page'
import Home from './pages/Home.page'

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/business-card" element={<BusinessCard />} />
        {/* This wildcard ensures that any path (e.g. /watch, /about) renders Home */}
        <Route
          path="/*"
          element={
            <Shell>
              <Home />
            </Shell>
          }
        />
      </Routes>
    </HashRouter>
  )
}
