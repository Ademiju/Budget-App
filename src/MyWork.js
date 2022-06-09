import Logo from "./components/Logo";
import AuthButton from "./components/AuthButton";
import Feature from "./components/Feature"
import "./App.css"

function App() {
  const links = [
    {
      buttonName: "Review"
    },
    {
      buttonName: "Tips"
    },
    {
      buttonName: "Alerts"
    },
    {
      buttonName: "Blog"
    },
  ]
  return (
    <div className="app-container">
     <div className="header-container">
       <div className="header">
          <Logo/>
          <div style={{display: "flex", justifyContent: "space-between", width: "25%",marginLeft:"32em", marginRight: "5em"}}>
            {links.map((link) => <div className="top-header">{link.buttonName}</div>)}
          </div>
          <AuthButton/>
       </div>
       <div className="hero-header">
         <h2>Discover A Beautiful Place With Us </h2>
         <p>Would you explore nature paradise in the world, let's find the best destination in the world with us</p>
       </div>
       <Feature/>
       <div className="special-features">
         <p>SPECIAL FEATURES</p>
         <h2>See some benefits of joining us</h2>
       </div>

     </div>

    </div>
  );
  
}

export default App;
