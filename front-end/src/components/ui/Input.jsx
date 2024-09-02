const Input = ({ text, value, onChange }) => {
  return (
    <input
      className="w-1/2 px-4 py-2 transition duration-300 border-2 rounded-lg shadow-sm focus:shadow-md focus:outline-none focus:border-secondary font-text text-buttonText border-buttonText"
      type="text"
      placeholder={text}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
