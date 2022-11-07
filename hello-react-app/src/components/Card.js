import "./style.css";

function Card(props) {
  return (
    <div className="container">
      <div className="image">
        <img src={props.image} alt={props.alt} />
      </div>

      <div className="title-card">
        <h2>{props.title}</h2>
      </div>

      <div className="text-card">
        <p>
          {props.text1}
          <br />
          {props.text2}
          <br />
          {props.text3}
        </p>
      </div>
    </div>
  );
}

export default Card;
