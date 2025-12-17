export  const nextId = (tasks) => {
    const next = tasks.reduce((prev, next) => {
      return prev && prev.id < next.id ? prev.id : next.id;
    },0);

    return next + 1;
  };