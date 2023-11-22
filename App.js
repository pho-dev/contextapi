import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./contexts/auth"; 

//import Login from "./src/pages/Login";
//import Home from "./src/pages/Home";
//import Pedidos from "./src/pages/Pedidos";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
