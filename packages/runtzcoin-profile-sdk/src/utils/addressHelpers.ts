import addresses from "../constants/contracts";
import { Address } from "../types";

export const getNftAddress = (nftAddresses: Address, chainId: number): string => {
  return nftAddresses[chainId];
};

export const getRuntzProfileAddress = (chainId: number): string => {
  return addresses.runtzProfile[chainId];
};
