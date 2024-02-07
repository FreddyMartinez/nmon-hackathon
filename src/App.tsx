import { WidgetList } from './components/widgetList';
import reactLogo from './assets/react.svg'
import styles from './App.css?inline'

function App() {
 
  return (
    <>
      <style>{styles}</style>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <WidgetList></WidgetList>
    </>
  )
}

export function TestComponent() {
  return (<App></App>)
}

export default App
