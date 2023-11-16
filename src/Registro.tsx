import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.jpg"; 
import "./estilos/acceso.css";


const Registro =() => {

const navigate= useNavigate();

const [correo, setCorreo] = useState("");
 const [password, setPassword] = useState("");
 const [nombre, setNombre] = useState("");

const onRegistrar=async () => {{
    if (nombre==""){
        alert("ingrese un nombre");
        return;
     }
     if (correo==""){
        alert("ingrese un correo");
        return;
     }
     if (password==""){
        alert("ingrese la contraseña");
        return;
     }
const url="http://localhost:4000/usuarios/registrar";
const response=await fetch(url,{
    method:"POST",
    body:JSON.stringify({
        Nombre: nombre,
        Correo: correo,
        Password: password
    }),
    headers:{
        "Content-Type":"application/json"
    }
})

if (!response.ok){
    const mensaje=await response.json();
    alert(mensaje);
}else{
    alert ("Usuario registrado correctamente");
    navigate("/");
}
}}

return(

<div className="contenedor">

<div className="titulo">Enseña.Me LSM</div>

<div>

<img src={logotipo} className="logo"/>

</div>
<div className="agrupador-nombre">
     <div>Nombre de usuario</div>
<div>
<input
type="text"
placeholder="Ingresa un nombre"
className="caja-nombre"
value={nombre}
onChange={(e) => setNombre (e.target.value)} />
</div>
</div>
<div className="agrupador-correo">
     <div>Correo Electrónico o Numero Telefonico</div>
<div>
<input
type="text"
placeholder="Ingresa tu correo electrónico"
className="caja-correo"
value={correo}
onChange={(e) => setCorreo (e.target.value)} />
</div>
</div>

<div className="agrupador-password">
<div>Contraseña</div>
<div> 
    <input
type="password"
placeholder="Password"
className="caja-password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
/>
    </div>
    </div>

<div className="agrupador-boton">
<button className="boton-ingresar" onClick={()=>onRegistrar() }>Registrarse</button>
</div>

<div className="otros-botones">
<a href="/acceso" className="link-registro">Iniciar Sesion</a>
<a href="/recuperar-password" className="link-password">Olvidé mi contraseña</a>
        </div>
                </div>
)
}
export default Registro