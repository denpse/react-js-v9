type productType = {
  price: string;
  name: string;
};
const Card = ({ price, name }: productType) => {
  console.log(price);
  return (
    <div className="bg-gray-200 p-3">
      <h1>{name}</h1>
      <p>$ {price}</p>
    </div>
  );
};

export default Card;
