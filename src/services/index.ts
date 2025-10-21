import { api } from "@/api/rimacApi";
import { PlansResponse, User } from "@/types";

export const getUserData = async () => {
  const { data } = await api.get<User>('/user.json');
  return data;
}

export const getPlans = async () => {
  const { data } = await api.get<PlansResponse>("/plans.json");
  return data.list;
}