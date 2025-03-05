import "./Content.css";

const Content = ({ nama, membership }) => {
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
