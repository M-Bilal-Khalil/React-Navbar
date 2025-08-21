import "./Card.css";

const Card = ({data}) => {
  return (
    <div className = "card-container">
      <h3>{data?.fullName} </h3>
      <h5>ID: {data?.id}</h5>
      <h5>Roll Number: {data?.rollNumber}</h5>
    </div>
  );
}

export default Card;