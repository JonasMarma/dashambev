import {Table} from "react-bootstrap";

const TabelaParam = ({ rows }) => {

    return (
        <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo da Regra</th>
            <th>Nome do Parâmetro</th>
            <th>Faixa de Atraso</th>
            <th>Produto</th>
            <th>Direcionamento</th>
            <th>UF</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.type}</td>
                <td>{row.paramName}</td>
                <td>
                  {row.lateGap} {row.lateGap === "01" ? "dia" : "dias"}
                </td>
                <td>{row.product}</td>
                <td>{row.directDate}</td>
                <td>{row.uf}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
}

export default TabelaParam