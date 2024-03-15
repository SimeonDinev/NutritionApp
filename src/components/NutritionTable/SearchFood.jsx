import { Table } from "react-bootstrap";
import "./SearchFood.css";

export default function SearchFood() {
  return (
    <>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "#C18263" }}>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search food..."
                />
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
        </Table>
      </div>
    </>
  );
}
