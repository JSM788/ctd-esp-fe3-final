import { useState } from "react"
import x from "./styles/Form.module.css"
const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = formData
    const newErrors = {}

    if (name.length <= 5)
      newErrors.name = "El nombre completo debe tener más de 5 caracteres."
    if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Por favor, ingrese un correo electrónico válido."

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      setSuccessMessage("")
    } else {
      setErrors({})
      setSuccessMessage(
        `Gracias ${name}, te contactaremos cuando antes vía mail.`
      )
      console.log(formData)
    }
  }

  return (
    <div className={x.formContainer}>
      <form onSubmit={handleSubmit} className={x.form}>
        <div className={x.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={x.formControl}
          />
        </div>

        {errors.name && <small className={x.error}>{errors.name}</small>}

        <div className={x.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={x.formControl}
          />
        </div>
        {errors.email && <small className={x.error}>{errors.email}</small>}

        <button type="submit" className={x.submitButton}>
          Enviar
        </button>
      </form>
      {successMessage && <small className={x.success}>{successMessage}</small>}
    </div>
  )
}

export default Form
