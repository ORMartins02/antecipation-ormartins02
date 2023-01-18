import "./App.css";
import { ReleaseForm } from "./components/Invoice";
// import { Result } from "./components/Result";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <main className="App-main">
          <section>
            <ReleaseForm />
            {/* <Result /> */}
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
