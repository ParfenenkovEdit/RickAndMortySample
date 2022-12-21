import { useState } from "react";

type Params = {
  api: Function;
  isInitialLoading?: boolean;
};

export const useApi = <RequestParamsType, ResponseDataType>({
  api,
  isInitialLoading = false,
}: Params) => {
  const [isLoading, setIsLoading] = useState(isInitialLoading);
  const [data, setData] = useState<ResponseDataType | null>(null);

  const onApiCall = async (params: RequestParamsType): Promise<void> => {
    setIsLoading(true);
    const response = await api(params);
    setData(response);
    setIsLoading(false);
  };

  return {
    onApiCall,
    isLoading,
    data,
  };
};
