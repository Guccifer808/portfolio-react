import React from "react";

const skillsContent = [
  { skillClass: "p35", skillPercent: "35", skillName: "HTML" },
  { skillClass: "p69", skillPercent: "69", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p15", skillPercent: "15", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "WORDPRESS" },
  { skillClass: "p30", skillPercent: "30", skillName: "JQUERY" },
  { skillClass: "p15", skillPercent: "15", skillName: "ANGULAR" },
  { skillClass: "p55", skillPercent: "55", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
