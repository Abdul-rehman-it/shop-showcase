import HomeLayout from "../components/HomeLayout";
import Navbar from "../components/Header/NavBar"; // Make sure to import your Navbar

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeLayout />
    </div>
  );
}
