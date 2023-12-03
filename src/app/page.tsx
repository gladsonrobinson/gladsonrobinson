export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4">
          Hello, I am Gladson Robinson
        </h1>
        <p className="text-xl mb-8">
          Senior Software Engineer at Delivery Hero | Berlin, Germany
        </p>
        <p className="text-lg mb-8">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/gladsonrobinson"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/gladsonrobinson
          </a>
        </p>
        <p className="text-lg mb-8">
          I am a Senior Software Engineer at Delivery Hero, passionate about
          using technology to drive business growth through strategic and
          innovative software solutions. With a Bachelor of Technology in
          Computer Engineering, I excel at defining, leading, and executing
          complex projects, mitigating risks, and meeting business objectives.
        </p>
        <p className="text-lg">
          Skills: React.js, Typescript, JavaScript, React-Testing-Library, React
          Query, Redux, Redux-saga, Next.js, IBM Loopback, Angular JS, Node.js,
          HTML5, CSS3, SASS, CSS
        </p>
      </div>
    </div>
  );
}

{
  /* <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="text-4xl md:text-6xl lg:text-8xl">Hello Im a human, <br/> and i belive in writing test cases</div>
    </main> */
}
