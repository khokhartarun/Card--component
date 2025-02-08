import Message from "./component/navv";
import Card from "./component/card";
import Footer from "./component/footer";
import "./App.css";
import "./component/navv.css";
import "./component/footer.css";
import "./component/navbar.css";
import "./component/card.css";

function App() {
  return (
    <>
      <Message />;
      <Footer />;
      <Card
        employee={{
          name: "Tarun Kumar",
          age: 22,
          gender: "Male",
          location: "Rohtak , Haryana - 124406",
          profileImage: "https://media.licdn.com/dms/image/v2/D5635AQEEEVSsQnMi1w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738689317609?e=1739296800&v=beta&t=7pi9Ooa_XhP5xpMziulpwHgjtlUPovZB2xrU8CqUFYw",
        }}
      />
    </>
  );
}

export default App;
