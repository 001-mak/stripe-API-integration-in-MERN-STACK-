import "./App.css";
import STRIPE_API from "./endpoints"
function App() {
  const handleCheckout = () => {
    fetch(STRIPE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ name: "Business Coaching Session", price: 500, quantity: 1 }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };
  return (
    <div className="App">
      <div className="navbar">
        <h1>Business Coach</h1>
      </div>
      <div className="overlay"></div>
      <div className="banner">
      </div>
        <div className="banner-body">
          <div className="DIV">

          <h2>STEP INTO A TRANSFORMATIVE 4-DAY EXPERIENCE TO FAST-TRACK GROWTH</h2>
          <h1>BOOK A BUSINESS COACHING SESSION</h1>
          </div>
          <button onClick={handleCheckout}>Book Now</button>
        </div>
    </div>

   
  );
}

export default App;
