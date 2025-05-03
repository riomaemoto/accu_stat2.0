import { RecoilState } from "recoil";

export type RowboxProps = {
  leftNumber: number;
  leftPercentage?: number;
  rightNumber: number;
  rightPercentage?: number;
  boxTitle?: string;
  inGameStats?: number;
};
