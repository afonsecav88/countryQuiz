type FlatQuestionProps = { flat: string };

export const FlatQuestion = ({ flat }: FlatQuestionProps) => {
  if (flat.length === 0) return;
  return (
    <img
      src={flat}
      alt={flat}
      className="inline w-8 h-5 mx-2 my-1.5 -rotate-2 "
    />
  );
};
