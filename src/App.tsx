import Card from './components/card/card'
import kanji from './assets/kanji/n5.json'

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
            <div className="flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-center">{item.kanji}</p>
              <div className="mt-2">
                <div className="flex flex-row items-stretch justify-center">
                  {item.read.map((reading, i) => (
                    <div
                      key={i}
                      className="bg-green-200 rounded-full px-3 py-1 m-1"
                    >
                      <p className="text-sm text-black">{reading}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-2">
              <p className="font-semibold">Meanings:</p>
              <div className="flex flex-row items-stretch justify-center">
                {item.meaning.map((meaning, i) => (
                  <div
                    key={i}
                    className="bg-red-200 rounded-full px-3 py-1 m-1"
                  >
                    <p className="text-sm text-black">{meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App
