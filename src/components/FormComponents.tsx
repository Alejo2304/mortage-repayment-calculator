import calculatorIcon from "../assets/images/icon-calculator.svg";
import type { CalculationType, FormStatus } from "../types.ts"

type ButtonProps = {
    calculationType: CalculationType;
    formStatus: FormStatus;
};

type TextInputProps = {
  label?: string;
  id?: string;
  type?: string;
  step?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type RadioGroupProps = {
  legend: string;
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export function Button({calculationType, formStatus}: ButtonProps): React.ReactElement {
    const label: string = calculationType === "InterestOnly" ? "Calculate Interests" : "Calculate Repayments";
    const isDisabled: boolean = formStatus === "empty" ? true : false;
    return(
        <button type="submit" disabled={isDisabled} className="flex justify-center items-center bg-lime rounded-xl">
            <img src={calculatorIcon} alt="Calculator icon" className="flex-1/4 h-[1.5lh]"></img> 
            <span className="flex-3/4 font-jakarta text-slate-900">{label}</span>
        </button>
    );
}

export function AmountInput({ label="Mortgage Amount", id="amountInput", type = "number", step, value, onChange }: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center border rounded-lg overflow-hidden bg-white">
        <span className="px-3 py-2 bg-slate-300 text-slate-500 font-bold">£</span>
        <input
          type={type}
          id={id}
          step={step}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export function TermInput({ label="Mortgage Term", id="termInput", type ="number", step, value, onChange }: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center border rounded-lg overflow-hidden bg-white">
        <input
          type={type}
          id={id}
          step={step}
          value={value}
          onChange={onChange}
        />
        <span className="px-3 py-2 bg-slate-300 text-slate-500 font-bold">years</span>
      </div>
    </>
  );
}

export function RateInput({ label="Interest Rate", id="rateInput", type ="number", step, value, onChange }: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center border rounded-lg overflow-hidden bg-white">
        <input
          type={type}
          id={id}
          step={step}
          value={value}
          onChange={onChange}
        />
        <span className="px-3 py-2 bg-slate-300 text-slate-500 font-bold">%</span>
      </div>
    </>
  );
}




export function RadioGroup({ legend, name, options, selectedValue, onChange }: RadioGroupProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map(opt => (
        <label key={opt.value} htmlFor={opt.value}>
          <input
            type="radio"
            id={opt.value}
            name={name}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </fieldset>
  );
}