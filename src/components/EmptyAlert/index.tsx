type EmptyAlertType = {
  children: string;
};

export const EmptyAlert = ({ children }: EmptyAlertType) => {
  return <p className="py-4 sm:py-8 text-center">{children} </p>;
};
