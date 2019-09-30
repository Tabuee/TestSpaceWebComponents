import * as React from 'react';
const menuCategories = [
    {
        name: 'Category #1',
        entries: [{name: 'link 1', link: './test'}, {name: 'link 2', link: './test'}]
    },
    {name: 'Category #2', entries: [{name: 'link 3', link: './link-3'}]}
];

export class SubscribeForm extends React.Component {
    render() {
        const categories = menuCategories.map((item, key) => {
            return (
                <div key={key}><span>{item.name}</span>
                    <ul>
                        {item.entries.map((value, index) => {
                            return (<li key={index}><a href={value.link}>{value.name}</a></li>);
                        })}
                    </ul>
                </div>
            );
        });

        return (
            <nav>
                {categories}
            </nav>
        );
    }
}
