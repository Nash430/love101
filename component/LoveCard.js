import Image from "next/image";
// import styles from "../css/card.module.css";
export default function LoveCard(props) {
  return (
    <div>
      <Image
        // className={styles.imagecomonentcard}
        alt=""
        {...props} // help to spread oprate to use all props values
      />
      <h2>Card here </h2>
      <p> lorem ipsum here now to get here </p>
    </div>
  );
}
