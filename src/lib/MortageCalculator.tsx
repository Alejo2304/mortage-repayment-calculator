function CalculateMonthlyInterestRate(interestRate: number): number{
    return((interestRate/100) / 12);
    }

function CalculateNumberOfMonthlyPayments(termYears: number): number{
    return (termYears * 12);
}

export function CalculateMonthlyPaymentFixedRate(amount: number, termYears: number, interestRate: number): number{
    const r: number = CalculateMonthlyInterestRate(interestRate);
    const n: number = CalculateNumberOfMonthlyPayments(termYears);
    const onePlusRPowerN = Math.pow(1 + r, n);

    if (amount <= 0 || termYears <= 0 || interestRate < 0) {
        throw new Error("Invalid parameters");
    }

    if (r === 0) {
        return amount / n; // Sin intereses
    }

    return ((amount * r * onePlusRPowerN) / (onePlusRPowerN - 1));
}

export function CalcultaTotalPaymentFixedRate(amount: number, termYears: number, interestRate: number): number{
    const monthlyPayment = CalculateMonthlyPaymentFixedRate(amount, termYears, interestRate);
    return (monthlyPayment * CalculateNumberOfMonthlyPayments(termYears));
}
