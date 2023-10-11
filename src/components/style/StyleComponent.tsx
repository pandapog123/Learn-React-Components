import "./StyleComponent.css";

export default function StyleComponent() {
  return (
    <>
      <h1>Style Component</h1>

      <div className="new-style">This is a new style</div>

      <div className="conflicting-style">Conflicting with parent</div>
    </>
  );
}
