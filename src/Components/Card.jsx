import { Link } from "react-router-dom"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { useDentistStates } from "./utils/global.context"

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates()
  const isFav = state.favs.find((fav) => fav.id == dentist.id)
  const addFav = () => {
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: dentist });
      alert(`Se elimino a ${dentist.name} de tus favoritos.`);
    } else {
      dispatch({ type: "ADD_FAV", payload: dentist });
      alert(`Se añadio a ${dentist.name} a tus favoritos.`);
    }
  };

  return (
    <div className="card">
      <img
        src={"../../public/images/doctor.jpg"}
        alt="dentist"
        style={{ width: "100%", height: "100%" }}
      />

      <Link to={`/detail/${dentist.id}`}>{dentist.name}</Link>

      <div>{dentist.username}</div>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        {isFav ? <FaStar /> : <CiStar />}
      </button>
    </div>
  )
}

export default Card
