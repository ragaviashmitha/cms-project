
import { useContext } from "react";
import { AuthContext } from "../routes/AuthContext";
import { Navigate } from "react-router";

const Home = () => {
  const { isAuth } = useContext(AuthContext);

  const handleAccess = (sectionName) => {
    if (!isAuth) {
      alert(`Please log in to access the "${sectionName}" section.`);
      return;
    }
    alert(`Access granted to "${sectionName}"`);
    
  };
   return (
     <div className="max-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-10">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500">
          Welcome to Research Paper CMS
        </h2>
        <p className="mt-4 text-white">
          Organize and manage research papers with ease.
        </p>
      </section>

      <section className="flex flex-col gap-6 w-full max-w-md text-center">
        {["Upload Papers", "View Papers", "Dashboard"].map((name) => (
          <div
            key={name}
            onClick={() => handleAccess(name)}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl border border-white/20 hover:border-pink-500 transition-all duration-200"
          >
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-300 mt-2">Click to access {name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
