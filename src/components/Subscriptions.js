import "../components/styles/Subscriptions.css";

function Subscriptions() {
  return (
    <div className="OuterContainer">
      <div className="Subscriptions">
        <h1>
          Unleash Your Potential with Our Unbeatable Gym Subscription Plans!
        </h1>
        <div className="Background">
          <div className="Cards">
            <div className="Card" id="first">
              <h2>30 days plan</h2>
            </div>
            <div className="Card" id="second">
              <h2>6 month plan</h2>
            </div>
            <div className="Card" id="third">
              <h2>12 month plan</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
