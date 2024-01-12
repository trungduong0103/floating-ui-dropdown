import React from "react";
import { Dropdown } from "./Dropdown";
import { Chip } from "./Chip";
import { Option } from "./Option";

const Demo = () => {
  const [items, setItems] = React.useState([
    "All Shipments",
    "Pending",
    "In Transit",
    "Out for Delivery",
    "To Collect",
    "Delivered",
    "Archived",
  ]);

  // add in scroll, sticky context
  return (
    <Dropdown anchor={<Chip>All Shipments</Chip>}>
      {items.map((it, idx) => (
        <Option key={idx}>{it}</Option>
      ))}
    </Dropdown>
  );
};

export { Demo };
