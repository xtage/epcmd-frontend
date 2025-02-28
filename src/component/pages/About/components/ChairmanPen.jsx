import { useAboutPage } from "../../../../lib/queries/About/useBriefProfile";
import { Box } from "@mantine/core";
const ChairmanPen = () => {
  const { data, isLoading } = useAboutPage();
  const ChairmanData = data?.chairman_pen_items.map((item)=>item.rendered_content) ?? [];
  return (
    <Box p="md">
      <div
        dangerouslySetInnerHTML={{ __html: ChairmanData }}
      />
    </Box>
  );
};

export default ChairmanPen;
