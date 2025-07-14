import calculatorIcon from "../assets/images/icon-calculator.svg";
import type { ButtonProps, InputProps, RadioGroupProps } from "../types.ts"

export function Button({calculationType, formStatus}: ButtonProps): React.ReactElement {
    const label: string = calculationType === "InterestOnly" ? "Calculate Interests" : "Calculate Repayments";
    const isDisabled: boolean = formStatus === "empty" ? true : false;
    return(
        <button type="submit" disabled={isDisabled} className="flex justify-center items-center bg-lime-900 disabled:bg-lime-1100 hover:bg-lime-950 active:bg-lime-1000 rounded-3xl py-2 px-5 space-x-2 w-full">
            <img src={calculatorIcon} alt="Calculator icon" className="h-[0.8lh]"></img> 
            <span className="font-jakarta font-bold text-slate-900 text-nowrap">{label}</span>
        </button>
    );
}

export function CurrencyInput({ label="Mortgage Amount", id="amountInput", type = "number",unit="£", step, value, onChange }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="font-jakarta text-slate-700">{label}</label>
      <div className="flex items-center border border-slate-500 rounded-lg overflow-hidden bg-white">
        <span className="px-3 py-2 bg-slate-100 text-slate-500 font-bold">{unit}</span>
        <input
          className="w-full px-4 focus:outline-none font-jakarta font-semibold text-slate-900"
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

export function NumberInput({ label="Number Input", id="numberInput", type ="number", unit="Number", step, value, onChange }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="font-jakarta text-slate-700">{label}</label>
      <div className="flex items-center border  border-slate-500 rounded-lg overflow-hidden bg-white">
        <input 
          className="w-full px-4 focus:outline-none font-jakarta font-semibold text-slate-900"
          type={type}
          id={id}
          step={step}
          value={value}
          onChange={onChange}
        />
        <span className="px-3 py-2 bg-slate-100 text-slate-500 font-bold">{unit}</span>
      </div>
    </>
  );
}

export function RadioGroup({ legend, name, options, selectedValue, onChange }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="font-jakarta text-slate-700">{legend}</legend>
      <div className="space-y-2">
        {options.map(opt => {
          const inputId = `${name}-${opt.value}`;
          const isSelected = selectedValue === opt.value;
          const styleDivSelected = isSelected ? "bg-lime-200 border-lime-500" : "bg-white";
          const styleInputSelected = isSelected ? "p-1.5 bg-lime-900 rounded-full ring-lime-900 ring-2 ring-offset-1" : "p-1.5 border rounded-full";
          return (
            <div key={opt.value} className={`w-full border px-2 py-1.5 rounded-lg overflow-hidden ${styleDivSelected}`}>
                <label htmlFor={inputId} className="flex items-center space-x-3 ">
                <input
                  className={`appearance-none ${styleInputSelected}`}
                  type="radio"
                  id={inputId}
                  name={name}
                  value={opt.value}
                  checked={isSelected}
                  onChange={() => onChange(opt.value)}
                />
                <span className="font-jakarta font-semibold text-slate-900">{opt.label}</span>
               </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}