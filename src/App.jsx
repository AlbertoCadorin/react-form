import { useState } from 'react'
import articles from './data/articles'

function App() {

  console.log(articles)

  return (
    <>
      <div>
        <h1>Lista articoli di giornale</h1>
      </div>
      <div>
        <ul>
          {articles.map(article => <li key={article.id}>{article.title}</li>)}
        </ul>

      </div>
    </>

  )
}

export default App
