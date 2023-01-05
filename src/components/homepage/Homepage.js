import PanelMouseLogger from "./PanelMouseLogger";

export default function Homepage() {
  return (
    <div className="mt-5 p-5 text-center" style={{ display: "inline" }}>
      <h1 className="mt-5 p-5">Hello from HomePage..</h1>
      <div className="text-center">
        <PanelMouseLogger />
      </div>
    </div>
  );
}
