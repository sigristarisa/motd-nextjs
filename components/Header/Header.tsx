import Link from "next/link";
import { NavItem } from "../../types/types";
import headerStyles from "./Header.module.css";
import cn from "classnames";

interface Props {
  setHeaderText: Function;
  getNavId: Function;
  activateNav: Function;
}

const Header = ({ setHeaderText, getNavId, activateNav }: Props) => {
  const navArr: NavItem[] = [
    {
      id: 0,
      navigate: "/",
      navContent: "HOME",
      headerText: "Mayonnaise Of The Day",
    },
    { id: 1, navigate: "/about", navContent: "ABOUT", headerText: null },
    {
      id: 2,
      navigate: "/todays-mayonnaise",
      navContent: "TODAY",
      headerText: "Your Mayonnaise Of The Day Is...",
    },
  ];

  return (
    <header className={`${headerStyles.container} place-items_center`}>
      <nav>
        <ul className='three-grid-columns place-items_center'>
          {navArr.map((nav: NavItem, index: number) => (
            <li
              className={`${headerStyles.item} ${cn({
                active: activateNav(index),
              })}`}
              key={index}
              onClick={() => {
                setHeaderText(nav.headerText);
                getNavId(nav.id);
              }}
            >
              <Link className={headerStyles.navItem} href={nav.navigate}>
                {nav.navContent}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
