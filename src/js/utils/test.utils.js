import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { UserPermissionContext } from '../components/userPermissions';
import {
  BloobirdsApi,
  SubscriptionContext,
} from '@bloobirds-it/bloobirds-platform-react-api-library';

export function renderWithProviders(elements, wrappers) {
  return render(
    <UserPermissionContext>
      <RecoilRoot>
        <BloobirdsApi token="MOCKED_TOKEN" accountId="MOCKED_ACCOUNT">
          <SubscriptionContext.BloobirdsSubscriptionWrapper>
            {elements}
          </SubscriptionContext.BloobirdsSubscriptionWrapper>
        </BloobirdsApi>
      </RecoilRoot>
    </UserPermissionContext>,
    wrappers,
  );
}
