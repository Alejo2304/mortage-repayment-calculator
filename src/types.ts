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
};

export type ButtonProps = {
    calculationType: CalculationType;
    formStatus: FormStatus;
};

export type InputProps = {
  label?: string;
  id?: string;
  type?: string;
  step?: string;
  unit?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RadioGroupProps = {
  legend: string;
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};
