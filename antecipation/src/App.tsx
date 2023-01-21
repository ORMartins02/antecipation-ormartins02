import "./App.css";
import { ReleaseForm } from "./components/ReleaseForm";
import { ContainerResult } from "./components/ContainerResult";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <main className="App-main">
          <section>
            <ReleaseForm />
            <ContainerResult />
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
