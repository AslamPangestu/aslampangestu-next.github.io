import styles from "../styles/Home.module.css";
import Head from "@app/components/Head";
import ProfileData from "@app/data/profile.json";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head />
      <div>{props.fullname}</div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      ...ProfileData,
    },
  };
};

export default Index;
