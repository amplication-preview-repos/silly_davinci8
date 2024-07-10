import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  likes?: LikeListRelationFilter;
};
