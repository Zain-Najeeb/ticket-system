import { useState } from 'react';

function RequestCardVisability(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue(prevValue => !prevValue);

  return [value, toggleValue];
}

export default RequestCardVisability;
