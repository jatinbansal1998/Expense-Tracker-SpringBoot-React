import React, {Component} from 'react';
import AppNav from "./AppNav";
import ReactTableComponent from "./ReactTableComponent";

class Category extends Component {
    state = {
        isLoading: true,
        Categories: []
    }

    async componentDidMount() {
        const response = await fetch("/categories/");
        const responseBody = await response.json();
        const body = await responseBody._embedded.categories;
        this.setState({Categories: body, isLoading: false})
    }

    render() {
        const {Categories, isLoading} = this.state;
        if (isLoading)
            return (<div>
                <AppNav navBarText="Categories"/>
                <div className={"App"}>Loading...</div>
            </div>)
        const columns = [
            {
                Header: 'Id',
                accessor: 'id'
            },
            {
                Header: 'Name',
                accessor: 'name'
            }
        ]
        var data = [];
        Categories.map(category => {
            data.push({
                id: category.id,
                name: category.name
            })
        });

        return (
            <div>
                <AppNav navBarText="Categories"/>
                <ReactTableComponent data={data} columns={columns}/>
                <div className={"App"}>

                    <h1>Categories</h1>
                    {
                        Categories.map(c =>
                            <div key={c.id} id={c.id}>
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
