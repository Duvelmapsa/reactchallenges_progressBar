import "./ProgressBar.css";

const ProgressBar = (props) => {
  const { width = 0 } = props;

  return (
    <div id="ProgressBar" className="progressBar">
      <div className="progressBar__background" style={{ width: `${width}%` }}>
        {width}%
      </div>
    </div>
  );
};

export default ProgressBar;
