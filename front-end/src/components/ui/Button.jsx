const Button = ({ text }) => {
    return (
      <button className="inline-block w-24 px-4 py-1 text-center transition duration-300 border-2 rounded-lg shadow-md cursor-pointer bg-secondary text-background border-secondary hover:bg-background hover:text-secondary font-text">
        {text}
      </button>
    );
  };
  
  export default Button;
  