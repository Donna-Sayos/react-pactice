import "./index.css"
import MousePosition from "./MousePosition";

export default function PanelMouseLogger() {
  return (
    <div>
      <h2 >Mouse Position</h2>
      <br />
      <MousePosition
        render={({ mousePosition }) => (
          <div>
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
          </div>
        )}
      />
    </div>
  );
}
