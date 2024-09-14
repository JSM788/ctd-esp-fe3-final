
import Form from '../Components/Form'
import { useDentistStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useDentistStates();
  
  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact