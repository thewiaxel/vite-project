import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.jpg"; 
import "./estilos/acceso.css";

const Recuperar =() => {

    const navigate= useNavigate();

const [correo, setCorreo] = useState("");

const onOlvidemicontraseña=async () => {{
     if (correo==""){
        alert("ingrese un correo");
        return;
     }
const url="http://localhost:4000/usuarios/recuperar-password";
const response=await fetch(url,{
    method:"POST",
    body:JSON.stringify({
        Correo: correo
    }),
    headers:{
        "Content-Type":"application/json"
    }
})

if (!response.ok){
    const mensaje=await response.text();
    alert(mensaje);
}else{
    alert ("se envio correo");
    navigate("/");
}

}}

return(

<div className="contenedor">

<div className="titulo">Enseña.Me LSM</div>

<div>

<img src={logotipo} className="logo"/>

</div>

<div className="agrupador-password">
<div>Correo</div>
<div> 
    <input
type="text"
placeholder="Ingrese tu Correo electronico"
className="caja-password"
value={correo}
onChange={(e)=> setCorreo(e.target.value)}
/>
    </div>
    </div>
<div className="agrupador-boton">
<button className="boton-ingresar" onClick={() => onOlvidemicontraseña() }>Ingresar</button>
</div>

<div className="otros-botones">
<a href="/" className="link-acceso">Iniciar sesion</a>
<a href="/registro" className="link-password">Registrarse</a>
        </div>
                </div>
)
}
export default Recuperar