import style from './Button.module.scss'

export default function Button({children}: {children: String}) {
  return <button className={style.botao}>{children}</button>;
}