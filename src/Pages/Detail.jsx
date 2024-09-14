import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDentistStates } from "../Components/utils/global.context"


const Detail = () => {
  const { state } = useDentistStates()
  const [detail, setDetail] = useState({})
  const { id } = useParams()
  const url = "https://jsonplaceholder.typicode.com/users/" + id
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDetail(res.data)
    })
  }, [])

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detail Dentist {id}</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail
