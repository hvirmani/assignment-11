import React from "react";

class App extends React.Component {
  constructor() {
    super();
    const data = [
      {
        name: "sagar",
        location: "kaithal",
      },
      {
        name: "Rahul",
        location: "Chandigarh",
      },
      {
        name: "Rahul KL",
        location: "Banglore",
      },
      {
        name: "Sant",
        location: "Yamunanagar",
      },
      {
        name: "Sumit",
        location: "Chandigarh",
      },
      {
        name: "Ritvik",
        location: "Kaithal",
      },
    ];
    this.state = {
      data,
      arr: data,
      value: "",
    };
  }

  render() {
    let check = (event) => {
      let { data } = this.state;
      let value = event.target.value.toLowerCase();
      let arr = data.filter((age) => age.name.toLowerCase().includes(value));
      this.setState({ value: event.target.value, arr });
    };
    return (
      <div className="container">
        <input
          type="text"
          className="form-control"
          onChange={check}
          placeholder="Search Your Restaurants"
        />
        <table class="table">
          <thead>
            <tr>
              <th className="success">Name</th>
              <th className="success">location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arr.map(function (element) {
              return (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
