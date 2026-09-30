function Button({ children, className = "", variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-light";

  const variants = {
    default:
      "bg-brand-green-light text-brand-blue hover:bg-white",
    outline:
      "border-2 border-white/40 bg-transparent text-white hover:border-brand-green-light hover:text-brand-green-light",
    square:
      "bg-brand-green-light text-brand-blue hover:bg-white",
    solid: "bg-brand-blue text-white hover:bg-brand-blue-light",
    ghost: "text-white/80 hover:text-white",
  };

  const classes = `${baseClasses} ${variants[variant] ?? variants.default} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
