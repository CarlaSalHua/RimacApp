import { api } from "@/api/rimacApi";
import { PlansResponse } from "@/types";

export const getPlans = async (): Promise<PlansResponse> => {
  const response = await api.get<PlansResponse>("/plans.json");
  return response.data;
}