import { LoadingOverlay } from "@mantine/core";
import { useLayoutEffect } from "react";

const PageLoader = (props) => {
  useLayoutEffect(() => {
    if (props.isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.isLoading]);

  return (
    <div>
      <LoadingOverlay
        visible={props.isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 3 }}
        loaderProps={{ color: "#09367a", overflow: "hidden" }}
      />
    </div>
  );
};

export default PageLoader;
