import "./ItemCard.css";

const ItemCard = ({ item }) => {
  //the image is rendered as a value within an object, so this accesses the image itself
  //through the Object.values() array
  let img = Object.values(item.img)[0];

  return (
    <section className="item-card">
      <div>
        <img src={img} alt={item.name}></img>
        <h3>{item.name}</h3>
      </div>
      <p>{item.price}</p>
    </section>
  );
};

export default ItemCard;
