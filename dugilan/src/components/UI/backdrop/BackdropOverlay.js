import styles from "./BackdropOverlay.module.css";
const BackdropOverlay = ({ modalHandler }) => {
  return (
    <div
      onClick={() => {
        modalHandler(false);
      }}
      className={styles.backdrop}
    ></div>
  );
};
export default BackdropOverlay;
