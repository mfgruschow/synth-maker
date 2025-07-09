import './App.css'
import Staff from './components/staff/staff'
import { DragProvider } from './contexts/drag-context-provider'


function App() {

  return (
    <>
      <h1>Melody</h1>
      <DragProvider>
        <Staff />
      </DragProvider>
    </>
  )
}

export default App
