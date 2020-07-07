import React, {Component} from 'react';

class Category extends Component {
    state = {
        isLoading: true,
        Categories: []
    }

    async componentDidMount() {
        const response = await fetch("/categories/")
        const responseBody = await response.json()
        const body = responseBody._embedded.categories
        console.log("will I trigger? wait and find out")
        console.log("Categories: " + body)
        this.setState({Categories: body, isLoading: false})
    }

    render() {
        const {Categories, isLoading} = this.state;
        if (isLoading)
            return <div>Loading...</div>
        return (
            <div>
                <h2>Categories</h2>
                {
                    Categories.map(c =>
                        <div id={c.id}>
                            <a href={c._links.expense.href}>{c.name}</a>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Category;
