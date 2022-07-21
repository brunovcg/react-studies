const SlowUI = ({ value, text }) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}> </span>
      ))}
    <div>CLICKS: {text}</div>
  </>
);

export default SlowUI;
