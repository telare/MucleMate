import "../../../shared/styles/components-styles/button.scss"
type ButtonProps = {
  style?: string;
  text: string;
  fnc: () => void;
};
export default function Button({ style, text, fnc }: ButtonProps) {
  return (
    <button className={style && style} onClick={fnc}>
      {text}
    </button>
  );
}
