import Form from "./Form.tsx"
import {CalculateMonthlyPaymentFixedRate, CalculateTotalPaymentFixedRate, CalculateTotalInterestPaid} from "../lib/CalculatorLogic.tsx"
import { useState } from "react"
import type { FormData } from "../types.ts"


export default function MortgageCalculator(): React.ReactElement{
    const [formData , setFormData] = useState<FormData>({
        amount: 0,
        termYears: 0,
        interestRate: 0,
        calculationType: "Repayment",
    });

    function calculateResults(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const {amount, termYears, interestRate, calculationType} = formData;
    if (calculationType === "Repayment"){
        console.log(CalculateMonthlyPaymentFixedRate(amount, termYears, interestRate));
        console.log(CalculateTotalPaymentFixedRate(amount, termYears, interestRate));
    } else {
        console.log(CalculateMonthlyPaymentFixedRate(amount, termYears, interestRate));
        console.log(CalculateTotalInterestPaid(amount, termYears, interestRate));
    }
    // Add calculation logic here
}


    return(
        <div>
            <Form formData={formData} setFormData={setFormData} handleSubmit={calculateResults}/>
        </div>
    );
}