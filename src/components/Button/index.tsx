import style from './Button.module.scss'

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
  children: string
}

export default function Button({type, children, onClick}: ButtonProps){
  return ( 
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  )
}