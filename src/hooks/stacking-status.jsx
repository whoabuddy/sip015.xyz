import { useEffect, useState } from 'react';
import { fetchReadOnlyFunction } from 'micro-stacks/api';
import { principalCV } from 'micro-stacks/clarity';
import { STXMAINNET } from '../lib/utils';

export const useStackingStatus = address => {
  const poxContract = 'SP000000000000000000002Q6VF78.pox';
  const functionName = 'get-stacker-info';
  const [stackingStatus, setStackingStatus] = useState(false);
  const [stackingData, setStackingData] = useState(null);

  useEffect(() => {
    let stackingStatusResolved = true;

    const getStackingStatus = async () => {
      if (address) {
        const stackingResponse = await fetchReadOnlyFunction(
          {
            contractAddress: poxContract.split('.')[0],
            contractName: poxContract.split('.')[1],
            functionName,
            functionArgs: [principalCV(address)],
            network: STXMAINNET,
            senderAddress: address,
          },
          true
        );
        // console.log(`stackingResponse: ${JSON.stringify(stackingResponse, null, 2)}`);
        if (stackingResponse && stackingStatusResolved) {
          setStackingStatus(true);
          setStackingData(stackingResponse);
        }
      } else {
        setStackingStatus(false);
        setStackingData(null);
      }
    };

    getStackingStatus();

    return () => (stackingStatusResolved = false);
  }, [address]);

  return [stackingStatus, stackingData];
};
