import { useQuery } from "@tanstack/react-query";

export const useGetData = (
  key: string,
  fnc: () => Promise<any>,
  staleTime: number
) => {
  return useQuery({
    queryKey: [key],
    queryFn: fnc,
    staleTime: staleTime,
  });
};
