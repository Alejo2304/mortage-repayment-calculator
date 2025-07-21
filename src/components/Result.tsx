import type { ResultProps} from "../types.tsx";
import imgResult from "../assets/images/illustration-empty.svg"

function ResultDefault({formData}: ResultProps): React.ReactElement{
    const toCalculate = formData.calculationType === "InterestOnly" ? "calculate interest" : "calculate repayments";
    const toTotal = formData.calculationType === "InterestOnly" ? "total interest" : "monthly repayment"

    return(
        <article className="flex flex-col w-full h-full bg-slate-900 md:rounded-bl-[4rem] justify-center items-center p-6">
            <div className="flex-1 flex justify-center items-center">
                <img src={imgResult} className="max-w-full h-auto p-5"></img>
            </div>
            <div className="flex-1 text-center space-y-5">
                <h1 className="font-jakarta font-semibold text-white text-2xl">Results shown here.</h1>
                <p className="font-jakarta text-center text-slate-400 px-8"> Complete the form and click "<span>{toCalculate}</span>" to see what your {toTotal} would be.</p>        
            </div>
        </article>
    );
}

function ResultSubmitting():React.ReactElement{
    return(
        <div className="flex flex-col w-full h-full bg-slate-900 rounded-bl-[4rem] justify-center items-center">
            <img src={imgResult}></img>
            <h1 className="font-jakarta font-semibold text-center text-white text-2xl">Calculating results...</h1>        
        </div>
    );
}

function ResultSuccess({formData, calculationData}: ResultProps): React.ReactElement{
    const {monthlyRepayment, totalRepayment, totalInterest} = calculationData;

    const toCalculate = formData.calculationType === "InterestOnly" ? "calculate interest" : "calculate repayments";
    const conditionalHeader = formData.calculationType === "InterestOnly" ? "Total interest you'll repay over the term" : "Total you'll repay over the term";
    const conditionalValue = formData.calculationType === "InterestOnly" ? totalInterest : totalRepayment;
    return(

        <div className="flex flex-col w-full h-full bg-slate-900 rounded-bl-[4rem] justify-center items-center">
            <h1  className="font-jakarta font-semibold text-center text-white text-2xl">Your results</h1>
            <p   className="font-jakarta font-semibold text-center text-white">
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
        </div>
    );
}

export default function Result({formData, calculationData}: ResultProps): React.ReactElement{

    if (formData.formStatus === "empty" || formData.formStatus === "typing" ){
        return(
            <ResultDefault formData={formData} calculationData={calculationData}/>
        );
    } else if (formData.formStatus === "submitting"){
        return(
            <ResultSubmitting />
            );
    } else if (formData.formStatus === "success"){
        return(
            <ResultSuccess formData={formData} calculationData={calculationData}></ResultSuccess>
        )
    } else{
        return(<h1> Unexpected error, please reload page.</h1>)
    }
}
