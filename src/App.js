import AppRoutes from "./components/routes/AppRoutes";
import { useThemeContext } from "./components/providers/ThemeProvider";

function App() {
  const { theme } = useThemeContext();

  return (
    <div id={theme}>
      <div className="main">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
