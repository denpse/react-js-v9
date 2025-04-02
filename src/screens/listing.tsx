import Card from "../components/card";

const productList = [
  {
    id: 1,
    name: "Coca",
    price: 1,
  },
  {
    id: 2,
    name: "Fanta",
    price: 2,
  },
  {
    id: 3,
    name: "Hanuman",
    price: 3,
  },
  {
    id: 4,
    name: "Tiger",
    price: 20,
  },
];

const Listing = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {productList.map((data) => {
        return (
          <div>
            <Card price={data.price} name={data.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
