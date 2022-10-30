import "./App.scss";
import Kanban from "./components/kanban";

function App() {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <h1 style={{ marginBottom: "20px" }}>Kanban || Basic UI</h1>
        <button
          style={{
            backgroundColor: "transparent",
            padding: "2px",
            borderRadius: "5px",
            fontSize: "25px",
            border: "none",
            color: "yellow",
            width: "8%",
          }}
        >

        </button>
        <Kanban />
      </div>
    </>
  );
}

export default App;
