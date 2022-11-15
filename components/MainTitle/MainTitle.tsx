import styles from "./MainTitle.module.css";
interface Props {
  headerText: string;
}

const MainTitle = ({ headerText }: Props) => {
  return (
    <div className={`${styles.mainTitle_container} place-items_center`}>
      <h1>MOTD</h1>
      <h2>{headerText}</h2>
    </div>
  );
};

export default MainTitle;
