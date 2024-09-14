import Card from "../Components/Card"
import { useDentistStates } from "../Components/utils/global.context"

const Favs = () => {
  const { state } = useDentistStates()
  console.log(state)
  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'} style={{ height: "100%" }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  )
}

export default Favs
