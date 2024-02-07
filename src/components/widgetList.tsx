import { useGetWidgets } from "../hooks/useGetWidgets";

export function WidgetList() {
  const widgets = useGetWidgets();
  
  const obj = widgets !== undefined ? JSON.parse(widgets.values.lstItemsErrors) : [{ sampleId: ""}];
  console.log(obj);
  

  return (
    <ul>
      {obj[0]['sampleId']}
    </ul>
  )
}
