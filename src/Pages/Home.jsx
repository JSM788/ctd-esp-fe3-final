import Card from "../Components/Card"
import { useDentistStates } from "../Components/utils/global.context"

const Home = () => {
  const { state } = useDentistStates()

  console.log(state)

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
