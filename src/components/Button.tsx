import calculatorIcon from "../assets/images/icon-calculator.svg";
import type { CalculationType } from "../types.ts"

type Props = {
    calculationType: CalculationType;
};

export default function CalculateMortgageButton({calculationType}: Props): React.ReactElement {
    const label = calculationType === "InterestOnly" ? "Calculate Interests" : "Calculate Repayments";
    return(
        <button type="submit">
            <img src={calculatorIcon} alt="Calculator icon"></img> 
            <span>{label}</span>
        </button>
    );
}