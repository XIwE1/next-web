// lib/axios-instance.ts
import Axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

// 创建实例
const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // 从环境变量读取
  timeout: 10000, // 设置超时时间:cite[3]
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从安全的地方获取 token，注意服务端环境
    let token: string | null = null;
    if (typeof window !== "undefined") {
      // 客户端环境
      token = localStorage.getItem("token");
    } else {
      // 服务端环境 - 这里可能需要从 cookie 或请求头中解析 token，需根据你的认证方案实现
      // const cookies = parseCookies(req); // 示例，需要实现 parseCookies 或使用 next/headers
      // token = cookies.token;
    }

    // 如果存在 token，则添加到请求头
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 直接返回响应数据中的 data 部分，根据后端格式调整
    return response.data;
  },
  (error: any) => {
    // 统一错误处理
    const message =
      error.response?.data?.message || error.message || "请求失败";
    // 可以在此处弹出错误提示，或者根据状态码跳转登录页等
    console.error("请求错误:", message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
