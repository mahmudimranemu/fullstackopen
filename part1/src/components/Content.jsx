import Part from "./Part";

const Content = (props) => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];

  return (
    <>
      <Part
        part={parts[0]}
        exercise={props.exercises1}
      />
      <Part
        part={parts[1]}
        exercise={props.exercises2}
      />
      <Part
        part={parts[2]}
        exercise={props.exercises3}
      />
    </>
  );
};

export default Content;
