const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Courses />
        <TrustedCompanies />
      </main>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);