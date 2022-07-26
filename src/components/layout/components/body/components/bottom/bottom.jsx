import Sellor from "../../../../../../assets/images/image-removebg.png";
import "./bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="imageDiv">
        <img src={Sellor} alt="El sellor" className="image" />
      </div>
      <div className="info">
        <div className="infoDiv">
          <h1>It just works.</h1>
          <p>
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </p>
          <h5>JEREMY ROBINSON</h5>
          <span>CMO, FYLO</span>
        </div>
      </div>
    </div>
  );
};

export { Bottom };
