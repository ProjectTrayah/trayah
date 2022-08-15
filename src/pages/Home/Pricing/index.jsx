import "./index.css";
const PricingCards = () => {
  return (
      <div className="card_container">
        <div className="card_heading">
          <h5>Basic</h5>
          <div className="card_pricing">
            <h2>
              19.00<sup>$</sup>
            </h2>
          </div>

          <div className="card_list">
            <ul>
              <li>Bandwidth: 1GB</li>
              <li>Onlinespace: 100MB</li>
              <li>Support: No</li>
              <li>Domain: 05</li>
              <li>Hidden Fees: No</li>
            </ul>
          </div>
          <div className="btn-outline">
            <a href="/#">Buy Now</a>
          </div>
        </div>
      </div>
  );
};
const Pricing = () => {
  return (
    <div className="pricing_container">
      <section className="pricing_main">
        <div className="price_head">
          <h3>PRICING</h3>
        </div>
        <div className="sect_card_container">
          <PricingCards />
          <PricingCards />
          <PricingCards />
          <PricingCards />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
