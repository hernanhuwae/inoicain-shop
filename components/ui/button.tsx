import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      className={cn("w-auto rounded-full bg-black border-transparent py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold hover:opacity-70"
        , className)}
      ref={ref}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
