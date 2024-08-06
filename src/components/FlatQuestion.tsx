type FlatQuestionProps = { flat: string };

export const FlatQuestion = ({ flat }: FlatQuestionProps) => {
  return <img src={flat} alt={flat} className="inline w-8 h-5 m-1" />;
};
