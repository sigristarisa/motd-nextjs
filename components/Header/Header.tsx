import Link from "next/link";
import { NavItem } from "../../helpers/types";
import styles from "./Header.module.css";
import cn from "classnames";

interface Props {
  page: string;
}

const Header = ({ page }: Props) => {
  const activateNav = (navigate: string): boolean => navigate === `/${page}`;
  const navArr: NavItem[] = [
    {
      id: 0,
      navigate: "/",
      navContent: "HOME",
    },
    { id: 1, navigate: "/about", navContent: "ABOUT" },
    {
      id: 2,
      navigate: "/todays-mayonnaise",
      navContent: "TODAY",
    },
  ];

  return (
    <header className='place-items_center'>
      <nav>
        <ul className='three-grid-columns place-items_center'>
          {navArr.map((nav: NavItem, index: number) => (
            <li
              className={cn({
                [styles.header_activeNav]: activateNav(nav.navigate),
              })}
              key={index}
            >
              <Link className={styles.header_navLink} href={nav.navigate}>
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
