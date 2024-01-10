import "./styles.css";

export default function App() {
  return (
    <div className="parent">
      <div className="container">
        <Picture />
        <div className="text-container">
          <Description />
          <Skillslist />
        </div>
      </div>
    </div>
  );
}

function Picture() {
  return <img src="my-photo.jpg" alt="my-photo" className="img" />;
}

function Description() {
  return (
    <div style={{ margin: "24px" }}>
      <h1 style={{ fontSize: "28px" }}>Ivanna Heraskina</h1>
      <p>
        Quit my job to become a UX/UI Designer who knows how to code. Love
        creating new beautiful things and transform old ugly things.
      </p>
    </div>
  );
}

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "cyan",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "UX Design",
    level: "advanced",
    color: "pink",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "white",
  },
  {
    skill: "Surfing",
    level: "beginner",
    color: "#c18ff0",
  },
];

function Skillslist() {
  const levelToEmoji = {
    advanced: "💪🏼",
    intermediate: "👌🏼",
    beginner: "😭",
  };

  return (
    <ul>
      {skills.map((skillData, index) => (
        <Skill
          key={index}
          skill={skillData.skill}
          level={skillData.level}
          color={skillData.color}
          emoji={levelToEmoji[skillData.level]}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, emoji }) {
  return (
    <li style={{ backgroundColor: color }}>
      {skill} {emoji}
    </li>
  );
}
