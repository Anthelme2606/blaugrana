import AppRoutes from "@app/routes";
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppProvider from "@app/provider/app.provider";

const AppWrapper = () => {
  return (
    <>
    <ToastContainer/>
      <AppRoutes />
    </>
  );
};

const App = () => (
 
<AppProvider>
    <Router>
      
        <AppWrapper />
   
    </Router>
  
 </AppProvider>
 
);

export default App;
