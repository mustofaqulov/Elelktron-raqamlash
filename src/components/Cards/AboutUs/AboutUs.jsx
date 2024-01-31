import "./aboutus.scss";
import Logo from "../../../assets/images/logo.png"
import Call from "../../../assets/images/call.png"
import Abaut from "../../../assets/images/about.png"
export function AboutUs() {
  const data = [
    {
      id: 1,
      img: Logo,
      text: "Elektron Raqamlash",
    },
    {
      id: 1,
      img: Call,
      text: "+998 99 655 23 27",
    },
    {
      id: 1,
      img: Abaut,
      text: "Biz haqimizda",
    },
  ];
  return (
    <>
      <div className="wrapper">
        {data.map(({ img, text, id }) => {
          return (
            <div className="information" key={id}>
              <div className="about-img">
                <img src={img} alt={text} />
              </div>
              <div className="about-text">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
