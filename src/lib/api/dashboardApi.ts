import axiosInstance from "@/lib/api/http";

export interface OrderData {
  id: string;
  title: string;
  content?: string;
}

export const getOrderList = async (): Promise<OrderData[]> => {
  // 客户端：相对路径 + withCredentials
  const data = await axiosInstance.get("/api/dashboard", {
    withCredentials: true,
  });
  return data.list;
};
