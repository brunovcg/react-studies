import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./mui/mui-mode";

function MyAppProvidersExemple() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default MyAppProvidersExemple;
