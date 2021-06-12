import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const useForceRerender = () => {
  const [id, setUuid] = useState(uuid());
  const forceRerender = () => setUuid(uuid());
  return { forceRerender, id };
};
