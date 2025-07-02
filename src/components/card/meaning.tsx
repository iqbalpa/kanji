interface IMeaningCard {
  meaning: string[]
}

const MeaningCard: React.FC<{
  item: IMeaningCard
}> = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <p className="text-white font-semibold">Meanings:</p>
      <div className="flex flex-row flex-wrap items-stretch justify-center">
        {item.meaning.map((meaning, i) => (
          <div key={i} className="bg-red-200 rounded-full px-3 py-1 m-1">
            <p className="text-sm text-black">{meaning}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeaningCard
