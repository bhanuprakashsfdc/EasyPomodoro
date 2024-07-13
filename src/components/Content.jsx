import React from 'react'

const Content = ({ keyword }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{keyword}</h1>
      <p>Information about {keyword}</p>
    </div>
  )
}

export default Content
