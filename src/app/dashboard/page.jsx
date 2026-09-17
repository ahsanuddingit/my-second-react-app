import Counter from '../components/Counter';

const dashboardPage = () => {
    console.log('Dashboard page rendered');
    return (
        <div>
            <h1>Dashboard page</h1>
            <Counter> </Counter>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default dashboardPage;