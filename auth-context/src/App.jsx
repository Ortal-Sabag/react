import './App.css';
import { AuthProvider } from './Contexts/AuthContext';
import Dashborad from './Components/Dashboard';

function App() {

  return (
    <AuthProvider>
      <Dashborad></Dashborad>
    </AuthProvider>

  )
}

export default App
