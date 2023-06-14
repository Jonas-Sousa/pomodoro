import style from './Button.module.scss'

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: string
}

export default function Button({type, children}: ButtonProps){
  return <button className={style.botao} type={type}>{children}</button>;
}