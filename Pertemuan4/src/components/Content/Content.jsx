import "./Content.css";

const Content = ({ nama, membership }) => {
  // Objek style untuk mengatur gaya internal
  const tableStyle = {
    border: "1px solid black",
    width: "300px",
    margin: "10px auto",
  };

  const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const cellStyle = {
    textAlign: "center",
  };

  return (
    <div>
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
            <td className="member" colSpan={2}>
              {membership}
            </td>
          </tr>
          <tr>
            <td>
              <button>Message</button>
            </td>
            <td>
              <button>Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Content;
