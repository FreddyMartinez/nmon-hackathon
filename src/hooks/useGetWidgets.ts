import { useEffect, useState } from "react";
import { getWidgets } from "../services/widgets";
import { Widget } from "../types/widget";

export function useGetWidgets() {
  const [widgets, setWidgets] = useState<Widget>();
  
  useEffect(() => {
    getWidgets("1838cfb6-6e24-45e6-8163-8e2eefd1154b").then((data) => {
      setWidgets(data);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }, [])

  return widgets;
}