const NoMatch: React.FC<{
  level: string
}> = ({ level }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-100 text-center mb-8">
        {`${level} Level Kanji Coming Soon!`}
      </h2>
      <p className="text-gray-400 text-center">Stay tuned for more levels!</p>
    </div>
  )
}

export default NoMatch
