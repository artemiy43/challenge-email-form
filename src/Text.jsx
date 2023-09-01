import icon_list from "./assets/images/icon-list.svg";
export default function Text() {
  return (
    <section className="flex flex-col justify-start items-start gap-4 pl-7 pr-6 sm:order-1 sm:pl-0 sm:pr-0 sm:mt-20">
      <h1 className="text-DarkSlateGrey text-4xl font-Roboto font-bold text-left sm:text-5xl">
        Stay updated!
      </h1>
      <p className="text-base font-Roboto w-fit text-left">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="flex flex-col gap-3 list-none">
        <li className="text-left flex flex-row place-items-start ">
          <img src={icon_list} alt="picture_icon" />
          <p className="text-left font-Roboto text-base ml-4">
            Product discovery and building what matters
          </p>
        </li>
        <li className="text-left flex flex-row place-items-start ">
          <img src={icon_list} alt="picture_icon" />
          <p className="text-left font-Roboto text-base ml-4">
            Measuring to ensure updates are a success
          </p>
        </li>
        <li className="text-left flex flex-row place-items-start ">
          <img src={icon_list} alt="picture_icon" />
          <p className="text-left font-Roboto text-base ml-4">And much more!</p>
        </li>
      </ul>
    </section>
  );
}
