import { useContext } from "react";
import { MessageContext } from "../../App";
import { MessageInstance } from "antd/es/message/interface";

export default function useMessage() {
  const message = useContext(MessageContext) as MessageInstance
  return message
}