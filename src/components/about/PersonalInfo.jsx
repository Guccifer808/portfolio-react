import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "SERHII" },
  { meta: "last name", metaInfo: "DANYLIUK" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "Nationality", metaInfo: "Ukrainian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Kyiv" },
  { meta: "phone", metaInfo: "+380734777877" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " omgro1ex" },
  { meta: "langages", metaInfo: "English, Ukrainian, Russian" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
