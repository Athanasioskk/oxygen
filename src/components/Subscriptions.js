import "../components/styles/Subscriptions.css";
import "material-symbols";

function Subscriptions() {
  return (
    <div className="OuterContainer">
      <div className="Subscriptions">
        <h1>
          Unleash Your Potential with Our Unbeatable Gym Subscription Plans!
        </h1>
        <p>
          Oxygen Gym offers exceptional and affordable subscription plans for
          fitness enthusiasts. With options like a 30-day plan for just 30
          euros, a 6-month plan priced at 90 euros, and a 12-month plan at 240
          euros, it provides great value for money. Whether you're looking for
          short-term commitment or a long-term fitness journey, Oxygen Gym's
          subscription plans cater to your needs without breaking the bank.
        </p>
        <div className="Background">
          <div className="Cards2">
            <div className="Card2" id="first">
              <h2>30 euros</h2>
              {/* <span
                class="material-symbols-outlined"
                style={{ fontSize: "25px" }}
              >
                
              </span>{" "} */}
              <label>30 day plan</label>
              <button>GET STARTED</button>
            </div>
            <div className="Card2" id="second">
              <h2>90 euros</h2>
              <label>6 month plan</label>
              <button>GET STARTED</button>
            </div>
            <div className="Card2" id="third">
              <h2>240 euros</h2>
              <label>12 month plan</label>
              <button>GET STARTED</button>
            </div>
          </div>
          <h1>Embark on your Fitness journey NOW!</h1>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
