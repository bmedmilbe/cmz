import IfenEdit from "./IfenEdit";
import useIfens from "../../hooks/certificate/useIfens";

const IfenAdd = () => {
  const { data: ifens } = useIfens();

  return (
    <>
      {ifens?.map((item, k) => (
        <IfenEdit ifen={item} key={k} />
      ))}
    </>
  );
};

export default IfenAdd;
