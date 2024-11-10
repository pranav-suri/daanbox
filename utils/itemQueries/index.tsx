import { where } from "firebase/firestore";
import { getByQuery } from "@/utils/getByQuery";

export const getApprovedItems = async () => {
  return await getByQuery("items", [where("approved", "==", true)]);
};

export const getUnapprovedItems = async () => {
  return await getByQuery("items", [where("approved", "==", false)]);
};
