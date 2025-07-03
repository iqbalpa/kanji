import Card from '../components/card/card'
import KanjiCard from '../components/card/kanji'
import MeaningCard from '../components/card/meaning'

interface Kanji {
  kanji: string
  read: string[]
  meaning: string[]
}

const KanjiModule: React.FC<{
  kanji: Kanji[]
}> = ({ kanji }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {kanji.map((item, index) => (
        <Card key={index} className="hover:cursor-pointer">
          <KanjiCard item={item} />
          <MeaningCard item={item} />
        </Card>
      ))}
    </div>
  )
}

export default KanjiModule
