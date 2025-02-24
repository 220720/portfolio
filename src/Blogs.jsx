// import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./style.css"; 

const Blogs = () => {
  const clients = [
    {
      title: "Company Creators",
      description:
        "Free yourself from administrative tasks while you're setting up shop.",
      img: "https://i.pinimg.com/736x/64/78/b3/6478b3974820242628824d10c5fe62a3.jpg",
    },
    {
      title: "Self-employed",
      description:
        "For freelancers and sole proprietors. Because when you fly solo, efficiency matters.",
      img: "https://i.pinimg.com/736x/df/b7/f6/dfb7f61cd947d9e217f75feb944654fd.jpg",
    },
    {
      title: "Scaling businesses",
      description:
        "With your books in good order, you can focus on growing your business.",
      img: "https://i.pinimg.com/736x/62/6f/a2/626fa2f5a24c4f6947374d59d438e539.jpg",
    },
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">
        Whatever your size, we have the right fit
      </h1>

      <div className="blogs-grid">
        {clients.map((client, index) => (
          <div key={index} className="blog-card">
            <img src={client.img} alt={client.title} className="blog-img" />
            <h2 className="blog-title">{client.title}</h2>
            <p className="blog-description">{client.description}</p>
            <div className="blog-arrow">
              <AiOutlineArrowRight />
            </div>
          </div>
        ))}
      </div>

      <div className="featured-story">
        <div className="story-content">
          <h2 className="story-title">Ethos seamlessly scaled to over</h2>
          <a href="#" className="story-link">Read full story →</a>
          <div className="story-stats">
            <span className="hours-saved">↓ 20 hrs</span>
            <span> saved per month with automated approval routing</span>
          </div>
          <div className="story-products">
            <span className="font-semibold">Products used:</span> Vendor Management
          </div>
        </div>
        <div className="story-img-container">
          <img
            src="https://i.pinimg.com/736x/4a/39/5e/4a395e21ca7594234328a08bf8b70da3.jpg"
            alt="Happy Couple"
            className="story-img"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
