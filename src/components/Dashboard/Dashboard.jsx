import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiInbox } from "react-icons/fi";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/fromData")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/fromData/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success("Deleted successfully");
          // এখানে আমরা লোকাল স্টেট থেকে রিমুভ করছি
          const remaining = data.filter((item) => item._id !== id);
          setData(remaining);
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleLogout = () => {
    logOut()
    toast.success("Logged out successfully");
    navigate("/login")
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <Link to={"/"}><h1 className="text-2xl font-bold text-gray-800">Dashboard</h1></Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phone:</strong> {item.phone}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Message:</strong> {item.message}
              </p>
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-500">
          <FiInbox className="text-6xl mb-4" />
          <h2 className="text-xl font-medium">No data available</h2>
          <p className="text-sm mt-1">Please check back later or add new data.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
