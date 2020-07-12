import React, {Component} from 'react';
import AppNav from "./AppNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Container, Form, FormGroup, Input} from 'reactstrap';
import {Link} from "react-router-dom";

class Expense extends Component {
    state = {
        isLoading: true,
        Expenses: [],
        Categories: [],
        date: new Date()
    }

    async componentDidMount() {
        const response = await fetch("/expenses/");
        const response_categories = await fetch("/categories/");
        const responseBody = await response.json();
        const responseBody_categories = await response_categories.json();
        const body = responseBody._embedded.expenses;
        const body_categories = responseBody_categories._embedded.categories;
        this.setState({Expenses: body, isLoading: false, Categories: body_categories})
    }

    handleChange = input => {

    }

    handleSubmit = input => {

    }

    render() {
        const {Expenses, isLoading, Categories} = this.state;
        if (isLoading)
            return (<div>
                <AppNav navBarText="Expenses"/>
                <div className={"App"}>Loading...</div>
            </div>)
        const title = <h3>Add Expense</h3>
        let optionList = Categories.map(category =>
            <option key={category.id} id={category.id}>
                {category.name}
            </option>
        )

        return (
            <div>
                <AppNav navBarText="Expenses"/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <label for="title">Title</label>
                            <Input type="text" name="title" id="title" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label for="title">Category</label>
                            <select>
                                {optionList}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label for="ExpenseDate">Expense Date</label>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label for="location">Location</label>
                            <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button> {' '}
                            <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                        </FormGroup>
                    </Form>
                    <div>
                        <h1>Expenses</h1>
                        {
                            Expenses.map(e =>
                                <div id={e.id}>
                                    {e.description}
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        );
    }
}

export default Expense;
