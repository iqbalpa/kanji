import React from 'react'
import { type ReactNode } from 'react'
import ReactCardFlip from 'react-card-flip'

const Card: React.FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 ${className}`}
      onClick={handleFlip}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side */}
        <div>{Array.isArray(children) ? children[0] : children}</div>

        {/* Back side */}
        <div>{Array.isArray(children) ? children[1] : null}</div>
      </ReactCardFlip>
    </div>
  )
}

export default Card
