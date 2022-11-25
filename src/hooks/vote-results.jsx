import { useEffect, useState } from 'react';
import { ADDRESS_STX_NO, ADDRESS_STX_YES, fetchJson, STX_INDEXER } from '../lib/utils';

export const useVoteResults = () => {
  const [voteResults, setVoteResults] = useState(null);

  useEffect(() => {
    let voteResultsResolved = true;

    const getVoteResults = async () => {
      const [yesVoteTxs, noVoteTxs] = await Promise.all([
        fetchJson(`${STX_INDEXER}/${ADDRESS_STX_YES}`),
        fetchJson(`${STX_INDEXER}/${ADDRESS_STX_NO}`),
      ]);
      console.log(`yesVoteTxs: ${JSON.stringify(yesVoteTxs.results.length)}`);
      console.log(`noVoteTxs: ${JSON.stringify(noVoteTxs.results.length)}`);
      if (yesVoteTxs && noVoteTxs && voteResultsResolved) {
        setVoteResults({
          yes: yesVoteTxs.results.length,
          no: noVoteTxs.results.length,
        });
      }
    };

    getVoteResults();

    return () => (voteResultsResolved = false);
  }, []);

  return voteResults;
};
