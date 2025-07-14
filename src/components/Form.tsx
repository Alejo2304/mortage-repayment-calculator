import type { FormData } from "../types.ts";
import {Button, CurrencyInput, NumberInput, RadioGroup} from "./FormComponents.tsx"


type Props = {
    formData: FormData;
    setFormData: (data: FormData) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({formData, setFormData, handleSubmit}:Props): React.ReactElement{
    return(
        <form onSubmit={handleSubmit} className="p-5 space-y-5">

            <h1 className="font-jakarta font-bold text-slate-900 text-xl">Mortgage Calculator</h1>

            <CurrencyInput
                step="1"
                value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: e.target.value, formStatus: "typing" })}
            />

            <NumberInput
                label="Mortgage Term"
                id="termInput"
                step="1"
                unit="years"
                value={formData.termYears}
                onChange={e => setFormData({ ...formData, termYears: e.target.value, formStatus: "typing" })}
            />

            <NumberInput
                label="Interest Rate"
                id="interestInput"
                step="1.0"
                unit="%"
                value={formData.interestRate}
                onChange={e => setFormData({ ...formData, interestRate: e.target.value, formStatus: "typing" })}
            />

            <RadioGroup
                legend="Mortgage Type"
                name="mortgageType"
                options={[
                    { label: "Repayment", value: "Repayment" },
                    { label: "Interest Only", value: "InterestOnly" }
                ]}
                selectedValue={formData.calculationType}
                onChange={val => setFormData({ ...formData, calculationType: val as any, formStatus: "typing" })}
            />

            <Button calculationType={formData.calculationType} formStatus={formData.formStatus}/>

            </form>
    );
}