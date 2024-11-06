import NewArrivalsHeader from "./NewArrivalsHeader"; 
import ProductList from "../Cards/NewArrivalsCard"; 

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Cras Convallis lacus",
      price: "$99.99",
      imageUrl:
        "https://media.istockphoto.com/id/1413407864/photo/caucasian-young-blonde-woman-sitting-on-the-chair-in-studio-smiling-and-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=_WrJ0Rk02g2A0h3mQzERUfJi8EUoraYUbdMm40n_1hw=",
    },
    {
      id: 2,
      name: "Cras Convallis lacus",
      price: "$89.99",
      imageUrl:
        "https://i.pinimg.com/736x/2a/15/70/2a15708414e731dfe3bbcb58a3683c33.jpg",
    },
    {
      id: 3,
      name: "Cras Convallis lacus",
      price: "$79.99",
      imageUrl:
        "https://i.pinimg.com/736x/70/65/70/706570098d6625692b77661b5943689b.jpg",
    },
  ];

  return (
    <section className="new-arrivals flex flex-col md:flex-row items-stretch p-0 md:p-2 md:ml-8 md:mr-16 space-y-4 md:space-y-0 md:space-x-4">

      <NewArrivalsHeader />
      <ProductList products={products} />
    </section>
  );
}
