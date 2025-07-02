import Card from './components/card/card'
import kanji from './assets/kanji/n5.json'
import KanjiCard from './components/card/kanji'
import MeaningCard from './components/card/meaning'

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-black text-center mb-5">
        Japanese Kanji
      </h1>
      <h2 className="text-2xl font-semibold text-black text-center mb-8">
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
