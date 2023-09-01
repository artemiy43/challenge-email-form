import { useState } from "react";
import "./App.css";
import picture_back_m from "./assets/images/illustration-sign-up-mobile.svg";
import Text from "./Text";
import Form from "./Form";
import Answer from "./Answer";

function App() {
  const [isSended, setIsSended] = useState(false);

  function onSubmit() {
    setIsSended(!isSended);
  }
  return (
    <>
      {!isSended ? (
        <main className="text-black text-3xl font-Roboto bg-white flex flex-col gap-12 w-full h-screen sm:w-[600px] sm:flex-row sm:grid sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 sm:p-6 sm:rounded-3xl lg:w-[1000px] lg:pl-16 lg:h-full">
          <div className="bg-mobile bg-cover bg-no-repeat w-full h-full sm:bg-desktop sm:order-2 sm:row-span-2 lg:w-[400px] lg:h-[593px] lg:place-self-end" />
          <Text />
          <Form onSubmit={onSubmit} />
          {/* <img
            src={picture_back_m}
            alt="picture_background"
            className="w-full"
          ></img>
          <Text />
          <Form onSubmit={onSubmit}/> */}
        </main>
      ) : (
        <div className="text-black text-3xl font-Roboto bg-white flex flex-col gap-12 w-full h-screen sm:w-[500px] sm:h-[500px] sm:p-12 sm:rounded-3xl">
          <Answer onClick={onSubmit} />
        </div>
      )}
    </>
  );
}

export default App;
