import { Link } from "react-router-dom";

const variants = {
  solid: "bg-charcoal text-ivory hover:bg-brown",
  ghost: "border border-charcoal/70 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  light: "bg-ivory text-charcoal hover:bg-sand",
  lightGhost: "border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal",
};

export default function Button({
  to,
  href,
  children,
  variant = "solid",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
