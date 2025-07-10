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

    return parseFloat(((amount * r * onePlusRPowerN) / (onePlusRPowerN - 1)).toFixed(2));
}

export function CalculateTotalPaymentFixedRate(amount: number, termYears: number, interestRate: number): number{
    const monthlyPayment = CalculateMonthlyPaymentFixedRate(amount, termYears, interestRate);
    return parseFloat((monthlyPayment * CalculateNumberOfMonthlyPayments(termYears)).toFixed(2));
}

export function CalculateTotalInterestPaid(amount: number, termYears: number, interestRate: number): number {
    const totalPaid: number = CalculateTotalPaymentFixedRate(amount, termYears, interestRate);
    return parseFloat((totalPaid - amount).toFixed(2));
}