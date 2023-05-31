import { Container, Row, Col } from './bootstrap-export';

const productContent = [
    {
        id: 1,
        title: 'Save',
        tagline: 'Save at your own pace!',
        description: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
        image: '/assets/product-save.svg',
        list: [
            {
                id: 1,
                item: 'Create Unlimted savings plans'
            },
            {
                id: 2,
                item: 'Withdraw anytime'
            },
            {
                id: 3,
                item: 'Save with Friends with SAN ID'
            },
            {
                id: 4,
                item: 'Be better at saving'
            },
            {
                id: 5,
                item: 'Accountability profile'
            },
            {
                id: 6,
                item: 'Activity and report'
            },
        ]
    },

    {
        id: 2,
        title: 'Learn',
        tagline: 'Financial freedom begins with You and Ardilla',
        description: 'Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.',
        image: '/assets/product-educate.svg',
        list: [
            {
                id: 1,
                item: 'Learn to invest in 2hrs'
            },
            {
                id: 2,
                item: 'Get a portfolio manager'
            },
            {
                id: 3,
                item: 'Stay on top of your finances'
            },
            {
                id: 4,
                item: 'Learn with family and friends'
            },
            {
                id: 5,
                item: 'Earn points and reward'
            }
        ]
    },

    {
        id: 3,
        title: 'Invest',
        tagline: 'Multiply your finances',
        description: 'Investment opportunities that gets you closer to financial freedom',
        image: '/assets/invest.svg',
        list: [
            {
                id: 1,
                item: 'Portfolio mangement'
            },
            {
                id: 2,
                item: 'Track your returns'
            },
            {
                id: 3,
                item: 'Risk Assessment'
            },
            {
                id: 4,
                item: 'Vetted Investment opportuinities'
            },
            {
                id: 5,
                item: 'Invest within your risk appetite'
            },
            {
                id: 6,
                item: 'Invest in Naira and Dollars'
            },
        ]
    },

    {
        id: 4,
        title: 'Budget',
        tagline: 'Plan your money',
        description: 'Every good budget starts with a good plan for your money',
        image: '/assets/budget.svg',
        list: [
            {
                id: 1,
                item: 'Save as you spend'
            },
            {
                id: 2,
                item: 'Track your expenses'
            },
            {
                id: 3,
                item: 'Organize your finances'
            },
            {
                id: 4,
                item: 'Sync and share budgets'
            },
            {
                id: 5,
                item: 'Financial guide'
            },
            {
                id: 6,
                item: 'Better decision-making'
            },
        ]
    },

    {
        id: 5,
        title: 'Insurance',
        tagline: 'Protect your interest',
        description: 'Stay protected, live freely',
        image: '/assets/insure.svg',
        list: [
            {
                id: 1,
                item: 'Vehicle insurance'
            },
            {
                id: 2,
                item: 'Home insurance'
            },
            {
                id: 3,
                item: 'Mutual Insurance'
            },
            {
                id: 4,
                item: 'Life Insurance'
            },
            {
                id: 5,
                item: 'Health Insurance'
            },
            {
                id: 6,
                item: 'Travel Insurance'
            },
        ]
    },
]

const Product = () => {
    return (
        <div className='product'>
            <Container>
                <div className='product-items'>
                    {productContent.map((product) => (
                        <Row key={product.id}>
                            <h1>Product</h1>
                            <Col>
                                <h3>{product.title}</h3>
                                <h5>{product.tagline}</h5>
                                <p>{product.description}</p>
                                <ul>
                                    {product.list.map((list) => (
                                        <li key={list.id}>
                                            <img src='/assets/pink-check.svg' alt='check-icon' />
                                            <span>{list.item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col className='product-img'>
                                <img src={product.image} alt='product' className='img-fluid' />
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Product;