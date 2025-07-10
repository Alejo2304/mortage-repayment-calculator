
import type { FormData } from "../types.ts";

type Props = {
    formData: FormData;
    SetFormData: (data: FormData) => void;
}
export default function Form({formData}:Props): React.ReactElement{
    return(
        <form>
            <label htmlFor="inputAmount">Mortgage Amount</label>
            <input
                type="number"
                id="inputAmount"
                step="0.01"
                value={formData.amount}
                onChange={() => ("test")}
            />

            <label htmlFor="inputTerm">Mortgage Term</label>
            <input
                type="number"
                id="inputTerm"
                step="1"
                value={formData.termYears}
                onChange={() => ("test")}
            />

            <label htmlFor="inputInterest">Interest Rate</label>
            <input
                type="number"
                id="inputInterest"
                step="0.01"
                value={formData.interestRate}
                onChange={() => ("test")}
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
                    onChange={() => ("test")}
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
                    onChange={() => ("test")}
                />
                Interest Only
                </label>
            </fieldset>
            </form>
    );
}