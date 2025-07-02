import Card from './components/card/card'
import kanji from './assets/kanji/n5.json'
import KanjiCard from './components/card/kanji'
import MeaningCard from './components/card/meaning'
import { Header } from './components/header/header'

function App() {
  return (
    <div className="w-full min-h-screen bg-black px-4 sm:px-6 md:px-10 pb-20 overflow-x-hidden">
      <Header />
      <h1 className="text-4xl font-bold text-gray-100 text-center mb-5">
        Japanese Kanji
      </h1>
      <h2 className="text-2xl font-semibold text-gray-100 text-center mb-8">
        Help you memorize Kanji!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {kanji.map((item, index) => (
          <Card key={index} className="hover:cursor-pointer">
            <KanjiCard item={item} />
            <MeaningCard item={item} />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App
