import { useState, useEffect } from "react";
import { Box } from "@mantine/core";
import { api } from "../../../../lib/api-interceptor";
const ActivitiesServices = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/aboutpage/");
        SetData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Box p="md">
      <div dangerouslySetInnerHTML={{ __html: data.rendered_activities_services }} />
    </Box>
  );
};

export default ActivitiesServices;
