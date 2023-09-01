import icon_answer from "./assets/images/icon-success.svg";
export default function Answer({ onClick }) {
  return (
    <div className="w-full flex flex-col px-4 pt-44 pb-6 h-screen justify-between sm:p-0">
      <div className="flex flex-col gap-8">
        <img src={icon_answer} alt="icon_picture" className="w-16 h-16" />
        <h1 className="text-DarkSlateGrey text-4xl text-left font-bold w-min sm:text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="text-DarkSlateGrey text-base text-left">
          A confirmation email has been sent to{" "}
          <span className="text-DarkSlateGrey font-bold">
            ash@loremcompany.com
          </span>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button
        onClick={onClick}
        className="w-full bg-DarkSlateGrey hover:bg-Tomato text-Whitee rounded-md text-center text-base p-4"
      >
        Dismiss message
      </button>
    </div>
  );
}
