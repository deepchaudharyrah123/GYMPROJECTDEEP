import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      id: 1,
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 12999,
      length: 3,
    },
    {
      id: 2,
      imgUrl: "/cal5.avif",
      title: "HEAL_YEARLY",
      price: 41999,
      length: 6,
    },
    {
      id: 3,
      imgUrl: "/cal4.avif",
      title: "YEARLY",
      price: 70999,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>GYM PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.id}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p><Check /> Equipment</p>
                <p><Check /> All Day Free Training</p>
                <p><Check /> Free Restroom</p>
                <p><Check /> 24/7 Skilled Support</p>
                <p><Check /> 20 Days Freezing Option</p>
                <Link to={`/plan-detail/${element.id}`}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
