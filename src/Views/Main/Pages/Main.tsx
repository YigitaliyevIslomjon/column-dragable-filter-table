import { DynamicTable } from "Components/UI";
import useMainTable from "../Hooks/useMainTable";

export default function Main() {
  const { columns, rows } = useMainTable();
  return (
    <div style={{ padding: "30px" }}>
      <DynamicTable rows={rows} columns={columns} />
    </div>
  );
}
