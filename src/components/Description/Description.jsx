import css from "./Description.module.css";

const Description = ({ name, descr }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{descr}</p>
    </>
  );
};

export default Description;
