import useSWR, { SWRConfiguration } from "swr";
import { baseFetcher } from "./baseFetcher";

export function useSplendApi(
  url: string,
  mode: "get" | "post" | "put" | "del" = "get",
  config?: SWRConfiguration
) {
  const swr = useSWR(url, baseFetcher(url)[mode], {
    errorRetryCount: 0,
    ...config,
  });

  return swr;
}
