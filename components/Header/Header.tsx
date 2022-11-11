import Link from "next/link";
import { NavBtn } from "../../types/types";
import headerStyles from "./Header.module.css";

interface Props {
  setHeaderText: Function;
}

const Header = ({ setHeaderText }: Props) => {
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
    <header className={`${headerStyles.container} place-items_center`}>
      <nav>
        <ul className='three-grid-columns place-items_center'>
          {buttonArr.map((btn: NavBtn, index: number) => (
            <li key={index} onClick={() => setHeaderText(btn.headerText)}>
              <Link className={headerStyles.navItem} href={btn.navigate}>
                {btn.btnContent}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
