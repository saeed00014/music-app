const UseOutClick = ({ children, eventFunc, id }) => {
  const handleClick = (e) => {
    if (e.target?.id != id) {
      eventFunc(false);
      document?.removeEventListener("click", handleClick, true);
    }
  };
  document?.addEventListener("click", handleClick, true);

  return <>{children}</>;
};

export default UseOutClick;
