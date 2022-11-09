import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/utils';

export const useVoteStatus = address => {
  const [voted, setVoted] = useState(false);
  const stxYes = 'SP00000000000003SCNSJTCHE66N2PXHX';
  const stxNo = 'SP00000000000000DSQJTCHE66XE1NHQ';

  useEffect(() => {
    let voteStatusResolved = true;

    const getVoteStatus = async () => {
      if (address) {
        const txUrl = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${address}/transactions?unanchored=true&limit=50`;
        const response = await fetchJson(txUrl).catch(() => {
          console.error(`Transactions not found for ${address}`);
          return null;
        });
        if (response && voteStatusResolved) {
          for (const result of response.results) {
            if (result.tx_status === 'success' && result.tx_type === 'token_transfer') {
              if (
                result.token_transfer.recipient_address === stxYes ||
                result.token_transfer.recipient_address === stxNo
              ) {
                setVoted(true);
                return;
              }
            }
          }
        }
      } else {
        setVoted(false);
      }
    };

    getVoteStatus();

    return () => (voteStatusResolved = false);
  }, [address]);

  return voted;
};
