import { TraitsSelectorTypes } from "@/types/ReviewTypes";

const TraitsSelector: React.FC<TraitsSelectorTypes> = ({
  traits,
  setTraits,
}) => {
  const traitOptions = [
    "Adventurous",
    "Clean",
    "Good listener",
    "Honest",
    "Humorous",
    "Inspiring",
    "Kind",
    "Knowledgeable",
    "Non-judgmental",
    "Spontaneous",
    "Talkative",
    "Thoughtful",
    "Trustworthy",
  ];

  const handleTraitToggle = (trait: string) => {
    if (traits.includes(trait)) {
      setTraits(traits.filter((t) => t !== trait));
    } else {
      setTraits([...traits, trait]);
    }
  };

  return (
    <div className="flex flex-wrap mt-2 space-x-2 justify-items-start">
      {traitOptions.map((trait) => (
        <button
          key={trait}
          onClick={() => handleTraitToggle(trait)}
          className={`px-3 py-2 my-1 rounded-full ${
            traits.includes(trait)
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          aria-pressed={traits.includes(trait)}>
          {trait}
        </button>
      ))}
    </div>
  );
};
export default TraitsSelector;
