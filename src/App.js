import Home from "./pages/Home";

import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Parametrizacao } from "./pages/Parametrizacao/index";
import { Funil } from "./pages/Funil/index";
import { Envio } from "./pages/Envios/index";

import { useState, useEffect } from 'react'

const App = () => {

    const [rows, setRows] = useState([])

    // Logo quando entrar na página, puxar as rows do servidor
    useEffect(() => {
        const getRows = async () => {
            const rowsServer = await fetchRows()
            setRows(rowsServer)
        }
        getRows()
      }, [])

    // Método para puxar as rows do servidor
    const fetchRows = async () => {
        const res = await fetch('https://dash-ambev-server.herokuapp.com/parametrizacoes')
        const data = await res.json()
        
        return(data)
    }
    
    // Método para adicionar mais rows no servidor
    const addRow = async (row) => {
        // Enviar o POST
        const res = await fetch(
            'https://dash-ambev-server.herokuapp.com/parametrizacoes',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(row)
            }
        )

        // Obter os dados novamente
        const rowsServer = await fetchRows()
        setRows(rowsServer)
    }

    // Método para deletar uma coluna
    const deleteRow = async (id) => {
        console.log(id.id);
        await fetch(`https://dash-ambev-server.herokuapp.com/parametrizacoes/${id.id}`, {
            method: 'DELETE',
        })

        // Obter os dados novamente
        const rowsServer = await fetchRows()
        setRows(rowsServer)
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/parametrizacao"
                    render={(props) => (
                        <>
                            <Parametrizacao
                              rows={rows}
                              onAdd = {addRow}
                              onDelete = {deleteRow}
                            />
                        </>
                    )}
                />
                <Route path="/funil" component={withRouter(Funil)} />
                <Route path="/envio" component={withRouter(Envio)} />
                <Route path="/" component={withRouter(Home)} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
