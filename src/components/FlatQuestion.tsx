type FlatQuestionProps = { flat: string };

export const FlatQuestion = ({ flat }: FlatQuestionProps) => {
  return <img src={flat} alt={flat} className="block w-7 h-5 m-1" />;
};
