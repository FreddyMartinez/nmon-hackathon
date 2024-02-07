import axios from "axios";

export const getWidgets = async (id: string) => {
  const res = await axios.get<string>(`http://localhost:8096/dashboard/kpi/leonidas/${id}`);
  return res.data;
}