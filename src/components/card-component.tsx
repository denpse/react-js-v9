type prop = {
  name: string;
  price: string;
};

const CardComponent = ({ name, price }: prop) => {
  return (
    <div>
      <h1>name:{name}</h1>
      <p>price: ${price}</p>
    </div>
  );
};

export default CardComponent;
