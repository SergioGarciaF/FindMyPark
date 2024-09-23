const Input = ({ text, value, onChange }) => {
  return (
    <input
      className="self-center w-full px-4 py-2 transition duration-300 border-2 rounded-lg shadow-sm md:w-1/2 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-buttonText font-text text-buttonText border-buttonText"
      type="text"
      placeholder={text}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
