import Table from "react-bootstrap/Table";
import "./SelectedFoodTable.css";

function SelectedFoodTable() {
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="5" style={{ backgroundColor: "#009879" }}>
              <h4 className="table-heading">Selected Foods</h4>
            </th>
          </tr>
          <tr>
            <th className="description-cell">Description</th>
            <th className="nutrients-cells">Kcal</th>
            <th className="nutrients-cells">Protein (g)</th>
            <th className="nutrients-cells">Fat (g)</th>
            <th className="nutrients-cells">Carbs (g)</th>
          </tr>
        </thead>
        <tbody>
          {/* Todo! */}
          <tr>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default SelectedFoodTable;
