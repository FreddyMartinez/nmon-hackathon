import axios from "axios";
import { Widget } from "../types/widget";

export const getWidgets = async (id: string) => {
  const res = await axios.get<Widget>(`http://localhost:8096/dashboard/kpi/leonidas/${id}`);
  return res.data;
}