import React from "react";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    description: "Crypto Currency Dashboard & Financial Visualization",
    casestudy: "https://github.com",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Charts templates & infographics in Figma",
    description: "Crypto Currency Dashboard & Financial Visualization",
    casestudy: "https://github.com",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Figma dashboard UI kit for data design web apps",
    description: "Crypto Currency Dashboard & Financial Visualization",
    casestudy: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Work</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, description, casestudy }) => {
          return (
            <article className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio-item-cta">
                <a href={casestudy} target="_blank">
                  View case study
                </a>
              </div>
            </article>
          );
        })}
      </div>
      {/* 
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio2} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={portfolio3} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default Portfolio;
