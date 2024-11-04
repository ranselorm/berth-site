import React from "react";
import Card from "./Card";

const CardContainer: React.FC = () => {
  const cardData = [
    {
      title: "The Okta Secure Identity Commitment (OSIC)",
      subtitle: "Innovation",
      description:
        "OSIC is our long-term initiative to lead the industry in the fight against Identity attacks.",
      linkText: "Learn more",
      linkHref: "/secure-identity-commitment",
    },
    {
      title: "Webinar Hub",
      subtitle: "Webinars",
      description:
        "Our growing hub of on-demand webinars covers automation, compliance, IAM, zero trust, and more.",
      linkText: "Browse webinars",
      linkHref: "/webinars",
    },
    {
      title: "The Okta Integration Network (OIN)",
      subtitle: "Integrations",
      description:
        "Find thousands of ready-to-use, pre-built integrations for an ever-evolving tech stack.",
      linkText: "Learn more",
      linkHref: "/integrations",
    },
  ];

  return (
    <section className="px-4 md:px-14 py-12">
      <h3 className="para py-12 mb-8">
        We're here for you, from always-on customer support to thousands of
        integrations designed for every use case
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            linkText={card.linkText}
            linkHref={card.linkHref}
          />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
