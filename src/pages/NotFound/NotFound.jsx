import { NavLink } from "react-router-dom";

export function NotFound() {
    return (
        <>
            <h1> Oops.. Página não encontrada</h1>
            <NavLink to="/">Voltar para o inicio</NavLink>        
        </>
    )
}