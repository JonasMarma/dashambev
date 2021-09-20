import { Table, Button } from "react-bootstrap";

const TabelaParam = ({ rows, deleteItem }) => {
  return (
    <Table bordered hover size="sm">
      <thead>
        <tr style={{ background: "#F7F9FC" }}>
          <th style={{ textAlign: "center" }}>#</th>
          <th>Tipo da Regra</th>
          <th>Nome do Parâmetro</th>
          <th>Faixa de Atraso</th>
          <th>Produto</th>
          <th>Data de Direcionamento</th>
          <th>UF</th>
          <th style={{ textAlign: "center" }}>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              <td style={{ textAlign: "center", background: "#F7F9FC" }}>
                {row.id}
              </td>
              <td>{row.type}</td>
              <td>{row.paramName}</td>
              <td>
                {row.lateGap} {row.lateGap === "01" ? "dia" : "dias"}
              </td>
              <td>{row.product.label}</td>
              <td>{row.directDate}</td>
              <td>{row.uf.label}</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteItem(row.id)}
                >
                  &times;
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelaParam;
