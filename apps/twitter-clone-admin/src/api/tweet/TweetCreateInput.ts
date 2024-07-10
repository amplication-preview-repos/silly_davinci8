import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  author?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
