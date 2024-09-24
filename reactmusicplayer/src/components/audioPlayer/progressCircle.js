import "./progressCircle.css";

const Circle = ({ color, precentage, size, strokewidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(precentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokewidth}
      strokeDasharray={circ}
      strokeDashoffset={precentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const ProgressCircle = ({ precentage, isPlaying, images, size, color }) => {
  return (
    <>
      <div className="progress-cirlce flex">
        <svg width={size} height={size}>
          <g>
            <Circle strokewidth={"0.4rem"} color="#3B4F73" size={size} />
            <Circle
              strokewidth={"0.6rem"}
              color={color}
              precentage={precentage}
              size={size}
            />
          </g>
          <defs>
            <clipPath id="myCircle">
              <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFF" />
            </clipPath>
            <clipPath id="#myInnerCircle">
              <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFF" />
            </clipPath>
          </defs>
          <image
            className={isPlaying ? "active" : ""}
            x={30}
            y={30}
            width={2 * (size / 2 - 30)}
            height={2 * (size / 2 - 30)}
            href=""
          />
          <image
            className={isPlaying ? "active" : ""}
            x={100}
            y={100}
            width={2 * (size / 2 - 100)}
            height={2 * (size / 2 - 100)}
            href=""
          />
        </svg>
      </div>
    </>
  );
};
export default ProgressCircle;
