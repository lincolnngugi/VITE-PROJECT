import { useNavigate } from "react-router";

function NavComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard/search");
        }}
        className={`btn btn-primary  m-1`}
      >
        Search
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className={`btn btn-primary m-1`}
      >
        ALL
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`btn btn-primary m-1`}
      >
        Logout
      </button>
    </div>
  );
}

export default NavComponent;