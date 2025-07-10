import Form from "./Form.tsx"
import Result from "./Result.tsx"
import {CalculateMonthlyPaymentFixedRate, CalculateTotalPaymentFixedRate, CalculateTotalInterestPaid} from "../lib/CalculatorLogic.tsx"
import { useState, useEffect } from "react"
import type { FormData , CalculationResult} from "../types.ts"


export default function MortgageCalculator(): React.ReactElement{
    const [formData , setFormData] = useState<FormData>({
        amount: "",
        termYears: "",
        interestRate: "",
        calculationType: "Repayment",
        formStatus: "empty"
    });

    const [results, setResults] = useState<CalculationResult>({
        monthlyRepayment: 0,
        totalRepayment: 0, 
        totalInterest: 0,
    });

    function calculateResults(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Cambiar el estado a 'submitting' antes de calcular
        setFormData(prev => ({ ...prev, formStatus: "submitting" }));

        const {amount, termYears, interestRate} = formData;
        const numAmount = parseFloat(amount);
        const numTermYears = parseInt(termYears);
        const numInterestRate = parseFloat(interestRate);

        setResults({
            monthlyRepayment: CalculateMonthlyPaymentFixedRate(numAmount, numTermYears, numInterestRate),
            totalRepayment: CalculateTotalPaymentFixedRate(numAmount, numTermYears, numInterestRate),
            totalInterest: CalculateTotalInterestPaid(numAmount, numTermYears, numInterestRate),
        })
    }

    return(
        <div>
            <Form formData={formData} setFormData={setFormData} handleSubmit={calculateResults}/>
            <Result formData={formData} calculationData={results}/>
        </div>
    );
}

       