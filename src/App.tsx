import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { defaultTheme } from './styles/themes/DefaultTheme'
import { GlobalStyle } from './styles/globalStyles'
import { AppRoutes } from './routes/AppRoutes.routes'

import { persitor, store } from './shared/redux/Cart/store'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persitor}>
            <AppRoutes />
          </PersistGate>
        </Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
