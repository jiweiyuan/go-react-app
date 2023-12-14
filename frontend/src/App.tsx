
import './App.css'
// import Example from "@/pages/dashboard/page.tsx";
import { Excalidraw } from "@excalidraw/excalidraw";
function App() {
  return (
    // <>
    //   <Example />
    // </>
      <>
          <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
          <div className="w-screen h-screen">
              <Excalidraw />
          </div>
      </>
  )
}

export default App
