import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Product: {slug}</h1>
        </div>
    );
};

export default Product;