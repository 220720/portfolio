import { Typewriter } from "react-simple-typewriter";

const MyComponent = () => {
  return (
    <Typewriter
      // options={{
      //   strings: [
      //     'Software Developer',
      //     // "Freelancer",
      //     // "MERN Stack Developer",
      //     // "Open Source Contributor",
      //   ],
      //   autoStart: true,
      //   loop: true,
      //   deleteSpeed: 50,
      // }}
      words={['Software Developer', 'Freelancer', 'MERN Stack Developer', 'Open Source Contributor']}
    />
  );
}

export default MyComponent;
