export type CustomerStatus = "Healthy" | "Warning" | "High Risk" | "Critical";

export type Customer = {
  name: string;
  score: number;
  status: CustomerStatus;
  users: number;
};
