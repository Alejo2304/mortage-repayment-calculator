import type { CalculationResult, FormData, CalculationType } from "../types.tsx";

type ResultProps = {
    formData: FormData
    calculationData: CalculationResult
}

type calculationTypeProps = {
    calculationType : CalculationType
}

function ResultDefault({calculationType}: calculationTypeProps): React.ReactElement{

    const toCalculate = calculationType === "InterestOnly" ? "calculate interest" : "calculate repayments";
    const toTotal = calculationType === "InterestOnly" ? "total interest" : "total repayment"

    return(
        <div>
            <img></img>
            <h1>Results shown here.</h1>
            <p> Complete the form and click "<span>{toCalculate}</span>" to see what your {toTotal} would be.</p>        
        </div>
    );
}

export default function Result({formData, calculationData}: ResultProps): React.ReactElement{

    if (formData.formStatus === "empty" || formData.formStatus === "typing"){
        return(
            <ResultDefault calculationType={formData.calculationType}/>
        );
    } else if (formData.formStatus === "submitting"){
        return(
            <>
            </>
        );
    }


    return(<></>);
}
