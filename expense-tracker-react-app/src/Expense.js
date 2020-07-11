import React, {Component} from 'react';
import AppNav from "./AppNav";

class Expense extends Component {
    state = {
        isLoading: true,
        Expenses: []
    }

    async componentDidMount() {
        const response = await fetch("/expenses/");
        const responseBody = await response.json();
        const body = responseBody._embedded.expenses;
        this.setState({Expenses: body, isLoading: false})
    }

    render() {
        const {Expenses, isLoading} = this.state;
        if (isLoading)
            return <div className={"App"}>Loading...</div>
        return (
            <div>
                <AppNav/>
                <div className={"App"}>
                    <h1>Expenses</h1>
                    {
                        Expenses.map(e =>
                            <div id={e.id}>
                                {e.description}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Expense;
