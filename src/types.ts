export type CalculationType = "InterestOnly" | "Repayment";
export type FormData = {
  amount: number;
  termYears: number;
  interestRate: number;
  calculationType: CalculationType;
};