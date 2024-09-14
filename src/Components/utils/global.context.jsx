import { createContext, useContext, useEffect, useReducer } from "react"
import { reducer } from "../../reducers/reducer"
import axios from "axios"

const favsList = JSON.parse(localStorage.getItem("favs")) || []

export const initialState = { theme: "light", data: [], favs: favsList }
export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data)
      dispatch({ type: "GET_DENTISTS", payload: res.data })
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
}

export const useDentistStates = () => useContext(ContextGlobal)
