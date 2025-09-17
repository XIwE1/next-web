"use client";
import { Button } from "antd";
import CustomButton from "./Button";
import { LeftOutlined } from "@ant-design/icons";

export default function BackRouter() {
  return (
    <>
      <CustomButton
        tooltip="返回上一级"
        icon={<LeftOutlined />}
        onClick={() => history.back()}
      >
        Back
      </CustomButton>
    </>
  );
}
