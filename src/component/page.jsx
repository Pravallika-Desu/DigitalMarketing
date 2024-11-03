import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DigitalMarketingPage = () => {
  const cardsData = [
    {
      id: 1,
      title: "Digital Marketing",
      text: "Digital marketing uses digital channels to reach targeted audiences, drive brand growth, and boost online engagement through strategic campaigns, SEO, and social media.",
      logo: "https://cdn-icons-png.flaticon.com/128/8118/8118287.png"
    },
    {
      id: 2,
      title: "Internet Marketing",
      text: "Internet marketing is the use of online platforms and digital channels to promote products and services. It encompasses strategies like SEO, social media marketing, and email campaigns to reach and engage target audiences effectively.",
      logo: "https://cdn-icons-png.flaticon.com/128/5757/5757635.png"
    },
    {
      id: 3,
      title: "Content Marketing",
      text: "Content Marketing involves creating and distributing valuable, relevant content to attract and engage a target audience. Its goal is to drive profitable customer action by fostering brand loyalty and trust through informative content.",
      logo: "https://cdn-icons-png.flaticon.com/128/12067/12067648.png"
    },
    {
      id: 4,
      title: "Social Media Marketing",
      text: "It involves using social platforms to connect with audiences, promote products, and enhance brand visibility. It leverages targeted content and engagement strategies to drive traffic, increase conversions, and foster community interaction.",
      logo: "./images/social-media.png"
    },
    {
      id: 5,
      title: "B2B Marketing",
      text: "B2B marketing focuses on promoting products and services from one business to another, emphasizing relationship-building and targeted strategies. It aims to meet the unique needs of organizations and industries, driving sales and partnerships.",
      logo: "https://cdn-icons-png.flaticon.com/128/11722/11722232.png"
    },
    {
      id: 6,
      title: "E-mail Marketing",
      text: "Email marketing is a powerful digital strategy that involves sending targeted messages to a defined audience to promote products or services. It effectively engages customers, nurtures leads, and drives conversions through personalized communication.",
      logo: "https://cdn-icons-png.flaticon.com/128/10401/10401061.png",
    },
  ];

  return (
    <div style={{ margin: '50px 40px 20px' }}>
      <div className="container-fluid" style={{ padding: 0 }}>
        {/* Header Section */}
        <div 
          style={{
            position: 'relative',
            backgroundImage: 'url("https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/digital-marketing-header.jpg?itok=YZDb8Tug")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'bronze',
            textAlign: 'center'
          }}
        >
          <h1 className="slide-down">Digital Marketing</h1>
        </div>

        {/* Image and Description Section */}
        <div className="row" style={{ marginTop: '20px', padding: '0 20px' }}>
          <div className="col-md-6 d-flex justify-content-end animate-left">
            <img 
              src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png" 
              alt="Digital Marketing Insight" 
              className="img-fluid" // Make image responsive
            />
          </div>
          <div className="col-md-6 d-flex align-items-center animate-left">
            <div style={{ textAlign: 'left', marginRight: '160px' }}>
              <h2>Digital Marketing</h2>
              <p>
                Digital Marketing involves the use of online channels and digital technologies to promote products and services.
                It includes strategies like SEO, social media marketing, email campaigns, and content marketing aimed at reaching
                target audiences and driving growth.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container my-5" style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <h2 className="slide-down-services" style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Digital Marketing Services</h2>
          <div className="row gx--10 gy-5">
            {cardsData.map((card) => (
              <div key={card.id} className="col-md-4 col-sm-6"> {/* Responsive column classes */}
                <div className="card h-100 hover-card" style={{ maxWidth: '300px', minHeight: '350px', margin: '0 auto', marginTop: '20px' }}>
                  <div className="card-body text-left">
                    <img src={card.logo} alt={card.title} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styling */}
        <style jsx>{`
          .slide-down {
            font-size: 38px;
            font-weight: 800;
            padding: 10px;
            font-family: ubuntu, sans-serif;
            letter-spacing: 1px;
            animation: slideDown 1.5s ease forwards;
          }

          .slide-down-services {
            animation: slideDown 1.5s ease forwards;
          }

          @keyframes slideDown {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-left {
            animation: slideInFromLeft 1.5s ease forwards;
          }

          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .hover-card {
            transition: transform 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-30px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }

          .card {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
          }

          .card-title {
            margin-top: 10px;
            font-size: 1.25rem;
            font-weight: bold;
          }

          .card-text {
            font-size: 1rem;
            color: #666;
          }

          @media (max-width: 768px) {
            .card-title, .card-text {
              font-size: 0.9rem;
            }

            h2 {
              font-size: 1.5rem; // Adjust header size for smaller screens
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
