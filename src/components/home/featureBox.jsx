import React from "react";
import feature1 from "../../assets/images/feature1.webp";
import feature2 from "../../assets/images/feature2.webp";
import iso from "../../assets/images/ISO-Qurocity.jpg";
import "./style.css";

const features = [
  {
    imgSrc: feature1,
    altText: "feature1",
    content: (
      <p>
        Meet our versatile and revolutionary Founder &amp; CEO of Qurocity- The
        ultimate language learning app, Mrs Sheetal Ramkumar Featured on Times
        Of India For{" "}
        <a
          target="_blank"
          href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
        >
          “The Most Inspiring Entrepreneurs to watch in 2024”
        </a>
        . Her phenomenal leadership skills and vision of building Bharat’s first
        language learning app has created a much greater impact on our team and
        other aspiring entrepreneurs too. Her success story is truly inspiring
        and makes us want to believe in ourselves too. Under her leadership in
        revolutionizing edutech, Qurocity has been able to cater to people all
        over the world, who are willing to make a change in their life through
        language learning and that's how Qurocity became the forefront of
        language education. To dive into the journey of Qurocity read more :{" "}
        <a
          target="_blank"
          href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
        >
          Times Of India
        </a>
      </p>
    ),
    reverse: false,
  },
  {
    imgSrc: feature2,
    altText: "feature2",
    content: (
      <p>
        We are thrilled to announce that Qurocity- The Ultimate Language
        Learning Platform is featured in The Economic Times' prestigious list of{" "}
        <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
          "The Most Trusted Brands To Watch in 2024"!{" "}
        </a>{" "}
        This recognition highlights our unwavering commitment to delivering
        top-notch services and building trust with our valued customers. Being
        spotlighted by such a renowned publication underscores our dedication to
        excellence and innovation. We are immensely grateful to our fantastic
        team for their continued support and trust. Stay tuned as we continue to
        bring to you the best of linguistics ever known! Here’s to much more
        achievements to come in the future for Qurocity! Want to Read more:{" "}
        <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
          Economic Times
        </a>
      </p>
    ),
    reverse: true,
  },
  {
    imgSrc: iso,
    altText: "iso",
    content: (
      <>
        <h4>
          Qurocity: ISO Certified and Trusted for Language Learning Excellence
        </h4>
        <p>
          At Qurocity, we are proud to be ISO certified, demonstrating our
          unwavering commitment to quality and excellence in language education.
          This prestigious compliance certification reflects our dedication to
          providing top-notch courses, reliable service, and continuous
          improvement. With precise quality assurance systems in place, our ISO
          certification ensures that you receive a world-class learning
          experience according to your needs. Trust Qurocity to be your partner
          in achieving your language learning goals with the assurance of our
          trusted and credible standards.
        </p>
      </>
    ),
    reverse: false,
  },
];

const FeatureBox = () => {
  return (
    <div className="feature-box-wrapper">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature-box ${
            feature.reverse ? "feature-box-reverse" : ""
          }`}
        >
          <div className="feature-box-img">
            <img src={feature.imgSrc} alt={feature.altText} />
          </div>
          <div className="feature-box-text">{feature.content}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBox;
