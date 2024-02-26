
function Card({username,btnText='click Me'}) {
  return (
    <div>
        <h1>{username}</h1>
        <button>{btnText}</button>
    </div>
  )
}

export default Card
