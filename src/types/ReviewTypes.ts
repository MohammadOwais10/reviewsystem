export type ReviewFormTypes = {
  onClose: () => void;
  onSubmit: () => void;
};

export type TextareaSectionTypes = {
  reviewText: string;
  setReviewText: (text: string) => void;
};

export type TraitsSelectorTypes = {
  traits: string[];
  setTraits: (traits: string[]) => void;
};

export type ThumbsRatingTypes = {
  recommend: boolean | null;
  setRecommend: (recommend: boolean | null) => void;
};

export type StarRatingTypes = {
  rating: number;
  setRating: (rating: number) => void;
};
