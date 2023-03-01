const logSecondsUpToMax = (max) => {
  let i = 1;
  const timer = setInterval(() => {
    if (i <= max) {
      console.log(i++);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

console.log(logSecondsUpToMax(10))