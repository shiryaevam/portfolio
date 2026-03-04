import { IconArrow } from "@icons";
import { Collapse, type CollapseProps } from "antd";

export const CustomCollapse = ({
  items
}: {
  items: CollapseProps["items"];
}) => (
  <Collapse
    expandIcon={({ isActive }) =>
      isActive ? <IconArrow style={{ rotate: "270deg" }} /> : <IconArrow />
    }
    styles={{
      body: { border: "none", borderRadius: 0 },
      root: { borderRadius: 0 }
    }}
    items={items}
    accordion
  />
);
