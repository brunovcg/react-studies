import { IconProps } from './types'
function Icon({ icon, onClick }: IconProps) {
  return (
    <span
      style={{ cursor: onClick && 'pointer' }}
      className="icon material-symbols-outlined"
      onClick={onClick}
    >
      {icon}
    </span>
  )
}

export default Icon

// ! COLOCAR NO HTML:
//   <link
// rel="stylesheet"
// href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
// />
