import calculatorIcon from "../assets/images/icon-calculator.svg";
import type { CalculationType } from "../types.ts"

type Props = {
    calculationType: CalculationType;
    onClick: () => void;
};

export default function CalculateMortageButton({calculationType, onClick }: Props): React.ReactElement {
    const label = calculationType === "InterestOnly" ? "Calculate Interests" : "Calculate Repayments";
    return(
        <button type="button" onClick={onClick} >
            <img src={calculatorIcon} alt="Calculator icon"></img> 
            <span>{label}</span>
        </button>
    );
}