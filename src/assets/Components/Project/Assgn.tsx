import "./Assign.css";
import logo from "../../Jane-miller.png";
import jazzy from "../../hero.png";
// import Bgimage from "../../Jane-miller.png";

const Assgn = () => {
  return (
    <div>
      <p className="Assign_h1">
        I'm a TEch Dev., Full stack Dev, cyber-Sec. Offsec
      </p>
      <img src={logo} className="" />
      <img src={jazzy} alt="" className="" />

      <div className="bg-img" title="about_img_">
        <h2>Hello Nigeria with About Background</h2>
      </div>

      <div className="background_two" title="Hero_img, Css style"></div>
      <details>
        <h4>this is an External Background styling</h4>
      </details>
      {/* this is another inline styling inside a div */}
      <div
        style={{
          backgroundImage: "url (${Bgimage})",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "60vh",
        }}
      >
        <h4
          style={{
            color: "red",
            fontWeight: "bolder",

            fontFamily: "sans-serif serif ,monospace",
          }}
        >
          THis is an inline styling
        </h4>
      </div>
    </div>
  );
};

export default Assgn;
