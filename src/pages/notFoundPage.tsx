import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  return (
    <div className="w-full h-full flex left-0 top-0 fixed bg-white text-black z-50">
      404 Not Found
      <button
        onClick={() => navigation("/")}
        className="bg-blue-50 rounded-md w-fit h-fit p-3"
      >
        go home
      </button>
    </div>
  );
}
