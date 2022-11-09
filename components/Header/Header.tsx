import Link from "next/link";
import { NavBtn } from "../../types/types";

interface Props {
  headerText: string;
  setHeaderText: Function;
}

const Header = ({ headerText, setHeaderText }: Props) => {
  const buttonArr: NavBtn[] = [
    {
      id: 0,
      navigate: "/",
      btnContent: "HOME",
      headerText: "Mayonnaise Of The Day",
    },
    { id: 1, navigate: "/about", btnContent: "ABOUT", headerText: null },
    {
      id: 2,
      navigate: "/todays-mayonnaise",
      btnContent: "TODAY",
      headerText: "Your Mayonnaise Of The Day Is...",
    },
  ];

  return (
    <header className='place-items_center'>
      <nav>
        <ul className='three-grid-columns place-items_center'>
          {buttonArr.map((btn: NavBtn, index: number) => (
            <li key={index} onClick={() => setHeaderText(btn.headerText)}>
              <Link href={btn.navigate}>{btn.btnContent}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
