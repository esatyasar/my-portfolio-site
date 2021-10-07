import './App.css';
import AppRouter from "./appRouter/AppRouter"
import PortfolioProvider from './contexts/PortfolioContexts';

function App() {
  return (
    <PortfolioProvider>
      <AppRouter/>
    </PortfolioProvider>
        );
}

export default App;
