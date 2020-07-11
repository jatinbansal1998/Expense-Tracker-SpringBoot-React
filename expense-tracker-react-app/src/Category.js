import React, {Component} from 'react';
import AppNav from "./AppNav";

class Category extends Component {
    state = {
        isLoading: true,
        Categories: []
    }

    async componentDidMount() {
        const response = await fetch("/categories/")
        const responseBody = await response.json()
        const body = responseBody._embedded.categories
        this.setState({Categories: body, isLoading: false})
    }

    render() {
        const {Categories, isLoading} = this.state;
        if (isLoading)
            return <div>Loading...</div>
        return (
            <div>
                <AppNav/>
                <div className={"App"}>
                    <h1>Categories</h1>
                    {
                        Categories.map(c =>
                            <div id={c.id}>
                                <a href={c._links.expense.href}>{c.name}</a>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Category;
