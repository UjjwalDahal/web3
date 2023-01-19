import { InjectedConnector } from "@web3-react/injected-connector";

// Making injected setup ready here
export const injected = new InjectedConnector({
  supportedChainIds: [97],
});
