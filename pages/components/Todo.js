export default function Todo(props) {
  return (
    <>
      <div></div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </>
  );
}
