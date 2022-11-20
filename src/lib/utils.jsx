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

// stacks configurations
export const STXAPI = 'https://stacks-node-api.mainnet.stacks.co';
export const STXMAINNET = new StacksMainnet();
