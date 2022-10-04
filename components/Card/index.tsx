import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card(props: CardProps) {
  return (
    <>
      <a
        className={styles.card}
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <h2>{props.title} &rarr;</h2>
        <p>{props.description}</p>
      </a>
    </>
  );
}
