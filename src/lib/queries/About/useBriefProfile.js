import { useQuery } from "@tanstack/react-query";
import { api } from "../../api-interceptor";
import {ABOUT_ENDPOINT} from '../../api-routes'


export const useAboutPage = () => {
  return useQuery({
    queryKey: ["aboutPage"],
    queryFn: async () => {
      return await api.get(ABOUT_ENDPOINT);
    },
    select: (response) => response.data,
  });
};
