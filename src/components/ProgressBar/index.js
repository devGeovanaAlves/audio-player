import "./style.css";

function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <span className="time current">0.00</span>
      <input type="range" />
      <span className="time">3.34</span>
    </div>
  );
}

export default ProgressBar;
