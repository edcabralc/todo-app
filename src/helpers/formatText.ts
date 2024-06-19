export const formatText = (total: number) => {
  return `Você tem ${
    total >= 0 && total < 9 ? `0${total}` : `${total}`
  } tarefa${total > 1 ? "s" : ""}`;
};
