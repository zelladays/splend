import useSWR from "swr";
import { baseFetcher } from "./baseFetcher";

export function useSplendApi(
  url: string,
  mode: "get" | "post" | "put" | "del" = "get"
) {
  const swr = useSWR(url, baseFetcher(url)[mode]);

  return swr;
}
