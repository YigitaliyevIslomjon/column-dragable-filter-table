import { Button, Popover, Table } from "antd";
import ReactDragListView from "react-drag-listview";
import { useTableState } from "./useTableState";

type DynamicTableProps = {
  rows: any[];
  columns: any[];
};

const DynamicTable = ({ columns, rows }: DynamicTableProps) => {
  const { tableColumns, handleOnDragEnd, content, handleColumnsOrder } =
    useTableState(columns);

  return (
    <ReactDragListView.DragColumn
      onDragEnd={handleOnDragEnd}
      nodeSelector="th"
      handleSelector=".dragHandler"
      ignoreSelector="react-resizable-handle"
    >
      <Table
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "20px",
              paddingRight: "30px",
            }}
          >
            <Button onClick={handleColumnsOrder}>Save change</Button>
            <Popover
              placement="bottom"
              title={"filter column"}
              content={content}
              trigger="click"
            >
              <Button>filter</Button>
            </Popover>
          </div>
        )}
        bordered
        columns={tableColumns}
        dataSource={rows}
        scroll={{ x: "100vw" }}
      />
    </ReactDragListView.DragColumn>
  );
};

export default DynamicTable;
