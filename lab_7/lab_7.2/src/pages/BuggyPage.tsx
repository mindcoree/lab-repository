const BuggyPage = () => {
  // Симулируем ошибку при рендере
  throw new Error("Simulated rendering error in BuggyPage. I crashed!");
  return <div>This will never render</div>;
};

export default BuggyPage;
    