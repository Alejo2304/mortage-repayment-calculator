import calculatorIcon from "../assets/images/icon-calculator.svg";

type CalculationType = "Repayment" | "InterestOnly";
type Props = {
    calculationType: CalculationType;
};

export default function CalculationButton({calculationType}: Props): JSX.Element{
    return(
        <button type="submit">
            <img src={calculatorIcon} alt="Calculator icon"></img> 
            <span>{calculationType === "Repayment" ? "Calculate Repayments" : "Calculate Interests"}</span>
        </button>
    );
}