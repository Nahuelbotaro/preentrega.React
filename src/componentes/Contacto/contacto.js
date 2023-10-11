import { useForm} from "react-hook-form";

import './/contacto.css'

const Contacto = () => {
  const {register, handleSubmit} = useForm();

  const enviar = (data) =>{
    console.log(data)
  }
  
return (
  <div className='contact-container'>
    <div className='contant'>
      <div className='formulario'>
        <h1>Contacto</h1>
        <form className='post' onSubmit={handleSubmit(enviar)}>
          <input type='text' placeholder='Ingrese su nombre' {...register("nombre")} />
          <input type='email' placeholder='Ingrese su E-mail'{...register("email")}  />
          <input type='phone' placeholder='Ingrese su numero de telefono' {...register("telefono")} />
          <textarea type='text' placeholder='Tu mensaje' {...register("texto")} />
          <button type='submit'>Enviar</button>
        
        </form>
      </div>
    </div>
  </div>
)}

export default Contacto    










      




         

  

