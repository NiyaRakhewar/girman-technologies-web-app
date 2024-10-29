import * as React from "react"
import "./../../styles/input.css"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className=
          "input-bar"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
