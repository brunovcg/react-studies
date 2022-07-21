const SlowUI = () => (
  <>
    {Array(50000)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{' '} </span>
      ))}
  </>
);

export default SlowUI;