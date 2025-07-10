export type CalculationType = "InterestOnly" | "Repayment";
export type FormStatus = "empty" | "typing" | "submitting" | "success";

export type FormData = {
  amount: string;
  termYears: string;
  interestRate: string;
  calculationType: CalculationType;
  formStatus: FormStatus;
};
export type CalculationResult = {
  monthlyRepayment: number;
  totalRepayment: number;
  totalInterest: number;
}