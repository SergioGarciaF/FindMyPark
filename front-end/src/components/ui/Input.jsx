const Input = ({ text, value, onChange, id }) => {
  return (
    <input
      className="self-center w-full px-4 py-2 transition duration-300 border-2 rounded-lg shadow-sm md:w-1/2 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-buttonText font-text focus:border-primary text-secondary border-secondary"
      type="text"
      id={id}
      placeholder={text}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
