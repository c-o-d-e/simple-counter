import "./App.css";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    addOne() {
        let counters = this.state.counter;
        this.setState({ counter: (counters += 1) });
    }

    subtractOne() {
        let counters = this.state.counter;
        this.setState({ counter: (counters -= 1) });
    }

    render() {
        return (
            <div className="App">
                <main>
                    <h1>Simple Counter</h1>
                    <div id="button-wrapper">
                        <button
                            className="buttons"
                            onClick={() => this.addOne()}
                        >
                            +
                        </button>
                        <button
                            className="buttons"
                            onClick={() => this.subtractOne()}
                        >
                            -
                        </button>
                    </div>
                    <h1>{this.state.counter}</h1>
                </main>
            </div>
        );
    }
}

export default App;
