import { useEffect } from 'react'
import './EventDetails.css'
import { useLocation, useNavigate} from 'react-router-dom'


export function EventDetailsPage() {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect (() => {
        if(!state) {
            navigate('/')
        }
    }, [])

    if(!state) {
        return <></>
    }

    return <h1>{state.nome}</h1>
}