import "./css/PeriodicTable.css";
import data from "./data/PeriodicTable.json";

const colors = new Map<string, string>();
colors.set("alkali metal", "#feb2b2");
colors.set("alkaline earth metal", "#7f9cf5");
colors.set("transition metal", "#9ae6b4");
colors.set("post-transition metal", "#9ae6b4");
colors.set("diatomic nonmetal", "#faf089");
colors.set("lanthanide", "#fbb6ce");
colors.set("metalloid", "#90cdf4");
colors.set("noble gas", "#fbd38d");

const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colors.get(element.category),
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Periodic Table of Elements</h1>
      <PeriodicTable />
    </div>
  );
};

export default App;
