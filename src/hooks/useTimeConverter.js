const useTimeConvertor = (number) => {
  const firstNum = Math.floor(number / 60);
  const secNum = Math.floor(number - Math.floor(number / 60) * 60);
  return (
    <div className="flex">
      <span>
        {secNum.toString().length > 1 ? null : 0}
        {secNum}
      </span>
      <span>:</span>
      <span>
        {firstNum.toString().length > 1 ? null : 0}
        {firstNum}
      </span>
    </div>
  );
};

export default useTimeConvertor;
