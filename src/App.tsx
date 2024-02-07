import { WidgetList } from './components/widgetList';
import { useGetWidgets } from './hooks/useGetWidgets';


function App() {
  const widgets = useGetWidgets();
  console.log(widgets.values.lstItemsErrors);
  
  const obj = JSON.parse(widgets.values.lstItemsErrors);

  return (
    <>
      <WidgetList items={`${obj['sampleId']}`}></WidgetList>
    </>
  )
}

export function TestComponent() {
  return (<App></App>)
}

export default App
