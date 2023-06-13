import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
   <div class="login-container">
   <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
   </div>
  

  
      </header>
    </div>
  );
  }

export default App;
