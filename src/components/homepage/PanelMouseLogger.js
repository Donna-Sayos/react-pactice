import "./index.css";
import MousePosition from "./MousePosition";

export default function PanelMouseLogger() {
  return (
    <div className="logger-container container-fluid card">
      <div className="p-4">
        <h2>Mouse Position</h2>
        <br />
        <MousePosition
          render={({ mousePosition }) => (
            <div>
              <b>
                <p>X: <span>{mousePosition.x}</span></p>
              </b>
              <b>
                <p>Y: <span>{mousePosition.y}</span></p>
              </b>
            </div>
          )}
        />
      </div>
    </div>
  );
}
