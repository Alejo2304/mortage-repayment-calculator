import type { FormData } from "../types.ts";
import FormButton from "./Button.tsx"

type Props = {
    formData: FormData;
    setFormData: (data: FormData) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({formData, setFormData, handleSubmit}:Props): React.ReactElement{
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputAmount">Mortgage Amount</label>
            <input
                type="number"
                id="inputAmount"
                step="0.01"
                value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
            />

            <label htmlFor="inputTerm">Mortgage Term</label>
            <input
                type="number"
                id="inputTerm"
                step="1"
                value={formData.termYears}
                onChange={e => setFormData({ ...formData, termYears: parseInt(e.target.value) })}
            />

            <label htmlFor="inputInterest">Interest Rate</label>
            <input
                type="number"
                id="inputInterest"
                step="0.01"
                value={formData.interestRate}
                onChange={e => setFormData({ ...formData, interestRate: parseFloat(e.target.value) })}
            />

            <fieldset>
                <legend>Mortgage Type</legend>

                <label htmlFor="repayment">
                <input
                    type="radio"
                    id="repayment"
                    name="mortgageType"
                    value="Repayment"
                    checked={formData.calculationType === "Repayment"}
                    onChange={() => setFormData({ ...formData, calculationType: "Repayment" })}
                />
                Repayment
                </label>

                <label htmlFor="interestOnly">
                <input
                    type="radio"
                    id="interestOnly"
                    name="mortgageType"
                    value="InterestOnly"
                    checked={formData.calculationType === "InterestOnly"}
                    onChange={() => setFormData({ ...formData, calculationType: "InterestOnly" })}
                />
                Interest Only
                </label>
            </fieldset>

            <FormButton calculationType={formData.calculationType}/>

            </form>
    );
}