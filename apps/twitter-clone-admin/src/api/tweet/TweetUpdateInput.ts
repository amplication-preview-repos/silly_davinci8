import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  author?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
