// App.jsx
// This is the ROOT component — the main entry point of our React app
// It imports and renders the StudentProfile component

import StudentProfile from "./StudentProfile";

function App() {
  return (
    <div>
      {/* We render <StudentProfile /> like an HTML tag */}
      {/* React will replace this with everything inside StudentProfile's return */}
      <StudentProfile />
    </div>
  );
}

export default App;
