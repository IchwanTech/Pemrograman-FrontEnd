import { useParams } from "react-router-dom";

const DetailPortals = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Detail Portals {name}</h1>
    </div>
  );
};

export default DetailPortals;
