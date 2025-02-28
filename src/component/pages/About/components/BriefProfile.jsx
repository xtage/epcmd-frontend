import { Box, Paper } from "@mantine/core";

import PageLoader from "../../../common/component/Loader/Loader";
import { useAboutPage } from "../../../../lib/queries/About/useBriefProfile";
const BriefProfile = () => {
  const { data, isLoading } = useAboutPage();
  const BriefData = data?.rendered_content ?? "";

  return (
    <Paper className="relativePositioning" p={'md'}>
      <PageLoader isLoading={isLoading} />
      <div dangerouslySetInnerHTML={{ __html: BriefData }} />
    </Paper>
  );
};

export default BriefProfile;
