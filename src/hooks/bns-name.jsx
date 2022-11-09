import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/utils';

export const useBnsName = address => {
  const [bnsName, setBnsName] = useState('');
  const bnsUrl = 'https://api.citycoins.co/stacks/get-bns-name/';

  useEffect(() => {
    let bnsResolved = true;

    const getBnsName = async () => {
      if (address) {
        const response = await fetchJson(`${bnsUrl}${address}`).catch(err => {
          console.error(`BNS name not found for ${address}`);
          return null;
        });
        if (response && bnsResolved) {
          setBnsName(response.value);
        }
      } else {
        setBnsName('');
      }
    };

    getBnsName();

    return () => (bnsResolved = false);
  }, [address]);

  return bnsName;
};
