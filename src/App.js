import "./App.css";
import AddExpensesModal from "./add-expenses-modal";
import Expenses from "./expenses";
import ReportsRow from "./reports-row";
import ShipmentsRow from "./shipments-row";

function App() {
  return (
    <div className="App">
      <AddExpensesModal />
      <ReportsRow />
      <Expenses />
      <ShipmentsRow />
    </div>
  );
}

export default App;
