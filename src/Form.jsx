import { useForm } from "react-hook-form";
export default function Form({ onSubmit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col px-7 sm:order-3 sm:px-0 sm:mt-10"
    >
      <div className="flex flex-row justify-between items-center">
        <label
          htmlFor="email"
          className="text-black mb-2 text-xs font-bold text-left"
        >
          Email address
        </label>
        {errors.email && (
          <p className="text-xs text-Tomato mb-2">{errors.email.message}</p>
        )}
      </div>
      <input
        type="text"
        placeholder="email@company.com"
        className={
          "w-full border-[1px] border-solid border-black rounded-md border-opacity-40 text-base p-4 " +
          (errors.email ? "bg-Tomato bg-opacity-20" : "")
        }
        {...register("email", {
          required: "This field is required",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address",
          },
        })}
      />
      <button
        type="submit"
        className="w-full bg-DarkSlateGrey hover:bg-Tomato text-Whitee rounded-md text-center text-base mt-5 p-4"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
