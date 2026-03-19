// App.tsx
import { CartProvider } from './Providers/CartProvider';
import { Home } from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;