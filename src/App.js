import {useSelector, useDispatch} from 'react-redux'; 
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index";

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

  return (
    <div className="App" style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding:20}}>
    <h1>{account}</h1>
    <button onClick={() => depositMoney(1000)}>Deposit Money</button>
    <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
