type UnionPropsProps = {
  status: "loading" | "done" | "error";
};

const Union = ({ status }: UnionPropsProps) => {
  let message =
    status === "loading"
      ? "loading"
      : status === "done"
      ? "done"
      : status === "error"
      ? "cancel"
      : null;

  return <div>{message}</div>;
};

export default Union;
