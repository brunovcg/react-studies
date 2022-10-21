type ButtonProps = {
  variant: 'primary' | 'secundary'
  // vamos strict a children
  children: string
  // restringe childdren a ser apenas um string e não aceitar os React.ComponentsProps
} & Omit<React.ComponentProps<'button'>, 'children'>

// } & React.ComponentProps<'button'>

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return <button className={`class-with-${variant}`}>{children}</button>
}
