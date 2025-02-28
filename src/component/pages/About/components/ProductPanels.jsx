import { Paper, Text } from "@mantine/core";

import PageLoader from "../../../common/component/Loader/Loader";
import { useAboutPage } from "../../../../lib/queries/About/useBriefProfile";
import TableWithPagination from "../../../common/component/Table/TablePagination";

const ProductPanels = () => {
  const { data, isLoading } = useAboutPage();
  const ProductPanelData = data?.product_panel_items ?? [];

  const COLUMN_NAME = [
    { label: "S.NO", accessor: "id" },
    { label: "Panel Name", accessor: "panel_name" },
    { label: "Convenor", accessor: "convenor" },
    { label: "Officer", accessor: "officer" },
  ];

  return (
    <Paper p={"md"} className="relativePositioning">
      <PageLoader isLoading={isLoading} />
      <TableWithPagination
        data={ProductPanelData}
        columns={COLUMN_NAME}
        title={"Product Panel"}
        rowsPerPage={10}
      />
    </Paper>
  );
};

export default ProductPanels;
