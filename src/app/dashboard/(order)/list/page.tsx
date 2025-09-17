"use client";
import { getOrderList, OrderData } from "@/lib/api/dashboardApi";
import { useEffect, useState } from "react";

export default function List() {
  const [List, setList] = useState<OrderData[]>([]);

  useEffect(() => {
    getOrderList().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <div>
      List:
      <ul>
        {List.map((item) => (
          <li key={item.id}>
            {item.title} - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
