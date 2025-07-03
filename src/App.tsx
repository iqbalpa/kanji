import n5 from './assets/kanji/n5.json'
import n4 from './assets/kanji/n4.json'
import { Header } from './components/header/header'
import { Route, Routes } from 'react-router'
import KanjiModule from './modules/level'
import NoMatch from './modules/noMatch'

function App() {
  return (
    <div className="w-full min-h-screen bg-black px-4 sm:px-6 md:px-10 pb-20 overflow-x-hidden">
      <Header />
      <h1 className="text-4xl font-bold text-gray-100 text-center mb-5 mt-8 sm:mt-10">
        Japanese Kanji
      </h1>
      <h2 className="text-2xl font-semibold text-gray-100 text-center mb-8">
        Help you memorize Kanji!
      </h2>

      <Routes>
        <Route index element={<KanjiModule kanji={n5} />} />
        <Route path="n5" element={<KanjiModule kanji={n5} />} />
        <Route path="n4" element={<KanjiModule kanji={n4} />} />
        <Route path="n3" element={<NoMatch level="N3" />} />
        <Route path="n2" element={<NoMatch level="N2" />} />
        <Route path="n1" element={<NoMatch level="N1" />} />
      </Routes>
    </div>
  )
}

export default App
