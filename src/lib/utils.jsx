import { StacksMainnet } from 'micro-stacks/network';

// fetch and return JSON from URL
export const fetchJson = async url => {
  const response = await fetch(url);
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  throw new Error(`fetchJson: ${url} ${response.status} ${response.statusText}`);
};

// stacks tools
export const STXAPI = 'https://stacks-node-api.mainnet.stacks.co';
export const STXMAINNET = new StacksMainnet();

export const USTX = 1000000;
export const DECIMALS = 6;
export const toMicroStx = amount => amount * USTX;
export const fromMicroStx = (amount, rounded = false) =>
  rounded ? (amount / USTX).toFixed(0) : (amount / USTX).toFixed(DECIMALS);
