import { Table, Button } from "react-bootstrap";
import "./SearchFood.css";

export default function SearchFood() {
  return (
    <>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "#C18263" }}>
                <div className="search-bar-and-button">
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search food..."
                  />
                  <Button
                    variant="light"
                    style={{
                      marginRight: "20px",
                      padding: "0px 10px",
                      height: "43px",
                    }}
                  >
                    Add food
                  </Button>
                </div>
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
