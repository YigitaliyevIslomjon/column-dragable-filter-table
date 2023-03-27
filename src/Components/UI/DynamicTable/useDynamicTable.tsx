import { Checkbox, Col, Row } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useDynamicTable = (columns: any[]) => {
  const [tableColumns, setTableColumns] = useState<any[]>(columns);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleOnDragEnd = useCallback((fromIndex: number, toIndex: number) => {
    setTableColumns((prev: any[]) => {
      let colneTableColumns = [...prev];
      let draggedColumn = colneTableColumns.splice(fromIndex, 1)[0];
      delete colneTableColumns[0]["fixed"];
      delete draggedColumn["fixed"];

      colneTableColumns.splice(toIndex, 0, draggedColumn);
      colneTableColumns = colneTableColumns.map((column, index) => ({
        ...column,
        order_number: index + 1,
      }));
      colneTableColumns[0]["fixed"] = "left";
      return colneTableColumns;
    });
  }, []);

  const handleColumnsOrder = useCallback(() => {
    const newOrderTable = tableColumns.map(({ key, order_number }) => ({
      key,
      order_number,
    }));

    alert(JSON.stringify(newOrderTable));
  }, [tableColumns]);

  const handleOnChangeCheckBox = useCallback(
    (checkedValues: CheckboxValueType[]) => {
      const checkedValuesStr = checkedValues.join(",");
      setTableColumns(() =>
        columns.filter((column) =>
          checkedValues.some((value) => value === column.key)
        )
      );
      searchParams.set("filter", checkedValuesStr);
      setSearchParams(searchParams);
    },
    [columns, searchParams, setSearchParams]
  );

  const getDefaultFilterColumnsKey = (
    columns: any[],
    searchParams: URLSearchParams | null
  ) => {
    const filteredColumns = searchParams?.get("filter")?.split(",");
    return filteredColumns || columns.map(({ key }) => key);
  };

  const defaultFilterColumnsKey = useMemo(() => {
    return getDefaultFilterColumnsKey(columns, searchParams);
  }, [columns, searchParams]);

  const content = (
    <Checkbox.Group
      defaultValue={defaultFilterColumnsKey}
      style={{ minWidth: "200px", maxWidth: "400px" }}
      onChange={handleOnChangeCheckBox}
    >
      <Row>
        {columns.map(({ key, dataIndex }) => (
          <Col key={key} span={8}>
            <Checkbox value={key}>{dataIndex}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );

  useEffect(() => {
    const newColumns = getDefaultFilterColumnsKey(columns, searchParams).map(
      (key: string) => columns.find((col) => col.key === key)
    );
    setTableColumns(newColumns);
  }, [columns, searchParams]);

  return {
    tableColumns,
    handleOnDragEnd,
    handleColumnsOrder,
    content,
  };
};
