import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">

        <div className="col-3 main">
          <Sidebar />
        </div>

        <div className="col-9 container">
          <Header/>
          <Card/>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
