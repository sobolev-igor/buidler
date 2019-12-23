import { ResolvedBuidlerConfig } from "@nomiclabs/buidler/types";

import { GanacheOptions } from "./types";

export function getDefaultGanacheOptions(
  config: ResolvedBuidlerConfig
): GanacheOptions {
  const defaultOptions = {
    url: `http://127.0.0.1:${DEFAULT_PORT}`,
    gasPrice: 20000000000,
    gasLimit: 6721975,
    defaultBalanceEther: 100,
    totalAccounts: 10,
    hardfork: "istanbul",
    allowUnlimitedContractSize: false,
    locked: false,
    hdPath: "m/44'/60'/0'/0/",
    keepAliveTimeout: 5000
  };

  return { ...defaultOptions, ...config.ganacheOptions };
}
