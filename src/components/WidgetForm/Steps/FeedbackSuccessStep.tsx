import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}:FeedbackSuccessStepProps){
    return(
        <>
            <header>
                <CloseButton />
            </header>

            <div className=" flex flex-col items-center py-10 w-[304px]">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 34C2.5 36.209 4.291 38 6.5 38H34.5C36.709 38 38.5 36.209 38.5 34V6C38.5 3.791 36.709 2 34.5 2H6.5C4.291 2 2.5 3.791 2.5 6V34Z" fill="#77B255"/>
            <path d="M9.21997 8.36202C10.376 7.61102 11.924 7.94002 12.678 9.09802L23.564 25.877L28.593 21.227C29.607 20.289 31.189 20.352 32.126 21.365C33.063 22.379 33.001 23.961 31.987 24.898L24.778 31.564C24.298 32.009 23.688 32.229 23.082 32.229C22.409 32.229 21.548 31.947 20.983 31.09C20.651 30.584 8.48297 11.82 8.48297 11.82C7.73197 10.661 8.06197 9.11302 9.21997 8.36202Z" fill="white"/>
            </svg>

            <span className="text-xl mt-2">
                Agradecemos o feedback!
            </span>

            <button 
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-2 mt-6 bg-zinc-800 border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            >
                Quero enviar outro
            </button>

            </div>
        </>
    )
}