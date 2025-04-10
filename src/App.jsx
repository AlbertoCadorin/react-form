import { useState } from 'react'
//import articles from './data/articles'

function App() {

  const [articleTitle, setArticleTitle] = useState([
    "Le borse sono tornate in forte calo, dopo i nuovi dazi di Trump",
    "Cosa fare per ridurre gli effetti della fast fashion",
    "Come funzionano le sanzioni per le bestemmie nel calcio italiano",
    "In Myanmar far arrivare i soccorsi dopo il terremoto è ancora un enorme problema",
    "Raggiunto l accordo di governo in Germania tra Cdu e Spd. Merz sarà cancelliere",
    "Frosinone, il bus di una scolaresca tampona un camion: 41 bambini coinvolti, 4 portati in ospedale"
  ]);
  const [newArticleTitle, setNewArticleTitle] = useState('')

  const addNewArticleTitle = event => {
    event.preventDefault();
    setArticleTitle([...articleTitle, newArticleTitle])
  }
  const removeArticle = i => {
    const newArticleTitle = articleTitle.filter((article, index) => {
      return index !== i
    })
    setArticleTitle(newArticleTitle)
  };

  return (
    <>
      <div>
        <h1>Lista articoli di giornale</h1>
      </div>
      <div>
        <ul>
          {articleTitle.map((article, i) => <li key={i}>{article}<button onClick={() => removeArticle(i)}>Elimina</button></li>)}
        </ul>

        <form onSubmit={addNewArticleTitle}>
          <input
            type="text"
            value={newArticleTitle}
            onChange={e => { setNewArticleTitle(e.target.value) }}
          ></input><button>Aggiungi</button>
        </form>
      </div>
    </>

  )
}

export default App
