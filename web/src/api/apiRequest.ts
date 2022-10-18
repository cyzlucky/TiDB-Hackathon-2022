import { request } from "@/api/config";
import { AxiosResponse } from "axios";
import { Responses } from "@/types/api/common";

type CheckTokenResponse = Promise<AxiosResponse<Responses<boolean>>>;
