import Card from "./components/card"

function App() {

  return (
    <main className="center">
        <h1>Animes</h1>
        <div>
          <Card tittle="One Piece" className="onePiece"/>
          <Card tittle="Naruto" className="naruto"/>
          <Card tittle="Hunter x Hunter" className="hunter"/>
          <Card tittle="Bleach" className="bleach"/>
        </div>
    </main>
  )
}

export default App
