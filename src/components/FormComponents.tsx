import calculatorIcon from "../assets/images/icon-calculator.svg";
import type { CalculationType, FormStatus } from "../types.ts"

type ButtonProps = {
    calculationType: CalculationType;
    formStatus: FormStatus;
};

type TextInputProps = {
  label: string;
  id: string;
  type?: string;
  step?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTyping?: () => void;
};

type RadioGroupProps = {
  legend: string;
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  onTyping?: () => void;
};

export function Button({calculationType, formStatus}: ButtonProps): React.ReactElement {
    const label: string = calculationType === "InterestOnly" ? "Calculate Interests" : "Calculate Repayments";
    const isDisabled: boolean = formStatus === "empty" ? true : false;
    return(
        <button type="submit" disabled={isDisabled} >
            <img src={calculatorIcon} alt="Calculator icon"></img> 
            <span>{label}</span>
        </button>
    );
}


export function TextInput({ label, id, type = "text", step, value, onChange, onTyping }: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onTyping) onTyping();
    onChange(e);
  };
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export function RadioGroup({ legend, name, options, selectedValue, onChange, onTyping }: RadioGroupProps) {
  const handleChange = (value: string) => {
    if (onTyping) onTyping();
    onChange(value);
  };
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
            onChange={() => handleChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </fieldset>
  );
}