interface IKanjiCard {
  kanji: string
  read: string[]
}

const KanjiCard: React.FC<{
  item: IKanjiCard
}> = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-4xl font-bold text-center">{item.kanji}</p>
      <div className="mt-2">
        <div className="flex flex-row items-stretch justify-center">
          {item.read.map((reading, i) => (
            <div key={i} className="bg-green-200 rounded-full px-3 py-1 m-1">
              <p className="text-sm text-black">{reading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KanjiCard
