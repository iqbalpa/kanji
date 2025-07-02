import Card from "./components/card/card";
import kanji from "./assets/kanji/n5.json";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {kanji.map((item, index) => (
          <Card key={index} className="hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-center">
                {item.kanji}
              </p>
              <div className="mt-2">
                <ul className="list-disc list-inside">
                  {item.read.map((reading, i) => (
                    <li key={i}>{reading}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-2">
              <p className="font-semibold">Meanings:</p>
              <ul className="list-disc list-inside">
                {item.meaning.map((meaning, i) => (
                  <li key={i}>{meaning}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
