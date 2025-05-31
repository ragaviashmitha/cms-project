
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
    <div className="p-6 space-y-8">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">Welcome to Research Paper CMS</h2>
        <p className="mt-4 text-lg text-gray-700">Organize and manage research papers with ease.</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        {["Upload Papers", "View Papers", "Dashboard"].map((name) => (
          <div
            key={name}
            onClick={() => handleAccess(name)}
            className="cursor-pointer bg-white p-6 rounded-lg shadow hover:shadow-lg border hover:border-blue-500"
          >
            <h3 className="text-xl font-semibold text-blue-600">{name}</h3>
            <p className="text-sm text-gray-600 mt-2">Click to access {name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
