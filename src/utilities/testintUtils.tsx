import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {ThemeProvider} from '../theme';
import {ThemeType} from '../theme/types';

export function renderComponent(component: React.ReactElement<any>): RenderAPI {
  return render(
    <ThemeProvider theme={ThemeType.Primary}>{component}</ThemeProvider>,
  );
}
