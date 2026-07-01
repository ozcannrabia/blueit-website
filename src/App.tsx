import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './i18n/LangContext'
import { HomePage }     from './pages/HomePage'
import { SolutionPage } from './pages/SolutionPage'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cozumler/:slug" element={<SolutionPage />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
