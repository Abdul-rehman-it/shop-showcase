import HomeLayout from "../components/HomeLayout";
import Navbar from "../components/Header/Navbar"; // Make sure to import your Navbar

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeLayout />
    </div>
  );
}
