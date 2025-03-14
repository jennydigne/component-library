import "./App.css"
import { Button } from "./Button.jsx"
import { Alert } from "./Alert.jsx"
import { Badge } from "./Badge.jsx"
import { Card } from "./Card.jsx"

import { FiInfo, FiAlertTriangle, FiCheck, FiX } from "react-icons/fi";


export default function App() {
  return (
      <div className="library">
        <h1>Component library</h1>
        <div className="component-container">
          <h2>Button</h2>
          <div className="buttons">
            <Button size="small" color="gray" disabled={false}>Small button</Button>
            <Button size="large" color="blue" disabled={true}>Large disabled button</Button>
          </div>
        </div>
        <div className="component-container">
          <h2>Alert</h2>
          <div className="alerts">
            <Alert color="lightblue" textColor="darkblue" Icon={FiInfo}>Information alert!</Alert>
            <Alert color="khaki" textColor="sienna" Icon={FiAlertTriangle}>Warning alert!</Alert>
          </div>
        </div>
        <div className="component-container">
          <h2>Badge</h2>
          <div className="badges">
            <Badge color="lightpink" textColor="darkred" size="small" Icon={FiX}>Error</Badge>
            <Badge color="lightgreen" textColor="darkgreen" size="large" Icon={FiCheck}>Check</Badge>
          </div>
        </div>
        <div className="component-container">
          <h2>Card</h2>
          <div className="cards">
            <Card imgSrc="/assets/potatoes.jpg" imgAlt="Potatoes" href="#">
              <h3>Potatoes</h3>
                <p className="card-price">$1.50/lb</p>
            </Card>
          </div>
        </div>
      </div>
  );
}