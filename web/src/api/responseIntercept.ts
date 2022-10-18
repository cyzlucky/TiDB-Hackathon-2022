import { AxiosResponse } from "axios";
import { Responses } from "@/types/api/common";

export const printLog = (response: AxiosResponse<Responses<any>>) => {
  console.log(
    `[Response.data] type: ${typeof response.data}, data: `,
    response.data,
    ", config: ", response.config
  );
};
