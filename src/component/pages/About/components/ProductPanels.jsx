import { Paper, Text ,Box} from "@mantine/core";

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
    <Paper className="relativePositioning" p={"lg"}>
      <Box>
        <Text>
          The Committee Administration oversees the governance and strategic
          decision-making processes within the organization. It ensures smooth
          operations, policy implementation, and compliance with organizational
          goals and regulations.
        </Text>
      </Box>
      <PageLoader isLoading={isLoading} />
      <TableWithPagination
        data={ProductPanelData}
        columns={COLUMN_NAME}
        title={"Product Panels"}
        rowsPerPage={10}
      />
    </Paper>
  );
};

export default ProductPanels;
