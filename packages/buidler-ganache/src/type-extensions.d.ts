import { GanacheOptions } from "./types";

declare module "@nomiclabs/buidler/types" {
  interface NetworkConfig {
    ganacheOptions?: GanacheOptions;
  }
}
