const Menu=()=>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="nav-brand" href="#">Enseña.Me LSM</a>
                <button className="navbar-toggler" type="button" dat-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/categorias">Categorias</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Menu