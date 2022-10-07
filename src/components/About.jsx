import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I'm Thiyagaraj from Chennai, India. I'm a full-stack web
          developer who is enthusiastic about new technologies and devices. I
          also enjoy putting new projects into action and seeing them through to
          completion.
        </p>

        <br />

        <p className="text-xl">
          {" "}
          I am interested in Web 3.0 and Blockchain technology. I'm currently
          learning more about M.E.R.N stack. In my spare time, I enjoy watching
          movies, series, and cricket.
        </p>
      </div>
    </div>
  );
};

export default About;
