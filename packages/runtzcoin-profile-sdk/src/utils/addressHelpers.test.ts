import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getRuntzProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getRuntzProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.runtzProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getRuntzProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.runtzProfile[TESTNET_CHAIN_ID]);
  });
});
