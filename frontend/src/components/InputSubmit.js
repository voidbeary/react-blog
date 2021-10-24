const validClassName =
  "bg-blue-600 text-white rounded-md py-2 mt-2 hover:bg-blue-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer";
const notValidClassName = "bg-gray-400 text-white rounded-md py-2 mt-2";

function InputSubmit({ isValid }) {
  return (
    <input
      type="submit"
      value="Submit"
      className={isValid ? validClassName : notValidClassName}
      disabled={!isValid}
    />
  );
}
export { InputSubmit };
