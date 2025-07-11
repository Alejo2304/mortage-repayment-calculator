import type { CalculationResult, FormData, CalculationType } from "../types.tsx";
import imgResult from "../assets/images/illustration-empty.svg"

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
            <img src={imgResult}></img>
            <h1>Results shown here.</h1>
            <p> Complete the form and click "<span>{toCalculate}</span>" to see what your {toTotal} would be.</p>        
        </div>
    );
}

function ResultSubmitting():React.ReactElement{
    return(
        <div>
            <img src={imgResult}></img>
            <h1>Calculating results...</h1>        
        </div>
    );
}

function ResultSuccess({formData, calculationData}: ResultProps): React.ReactElement{
    const {monthlyRepayment, totalRepayment, totalInterest} = calculationData;

    const toCalculate = formData.calculationType === "InterestOnly" ? "calculate interest" : "calculate repayments";
    const conditionalHeader = formData.calculationType === "InterestOnly" ? "Total interest you'll repay over the term" : "Total you'll repay over the term";
    const conditionalValue = formData.calculationType === "InterestOnly" ? totalInterest : totalRepayment;
    return(

        <article>
            <h1>Your results</h1>
            <p>
                Your result are show below based on the information you provided.
                To adjust the results, edit the form and click "<span>{toCalculate}</span>" again.
            </p>
            <div>
                <div>
                    <header>
                    Your monthly repayments
                    </header>
                    <h1>{monthlyRepayment}</h1>
                </div>
                <div>
                    <header>{conditionalHeader}</header>
                    <h2>{conditionalValue}</h2>
                </div>
            </div>
        </article>
    );
}

export default function Result({formData, calculationData}: ResultProps): React.ReactElement{

    if (formData.formStatus === "empty" || formData.formStatus === "typing" ){
        return(
            <ResultDefault calculationType={formData.calculationType}/>
        );
    } else if (formData.formStatus === "submitting"){
        return(
            <ResultSubmitting />
            );
    } else if (formData.formStatus === "success"){
        return(
            <ResultSuccess formData={formData} calculationData={calculationData}></ResultSuccess>
        )
    }


    return(<></>);
}
