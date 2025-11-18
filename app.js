const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CareerSkills />
        <AIEra />
        <Skills />
        <TrustedCompanies />
      </main>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);