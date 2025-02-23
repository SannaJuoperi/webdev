const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Sanna'
  const ika = 30

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Nico" age={20 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}
export default App