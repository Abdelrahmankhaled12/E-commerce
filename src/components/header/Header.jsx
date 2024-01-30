import HeaderPartOne from './header_partOne/HeaderPartOne'
import HeaderPartTwo from './header_partTwo/HeaderPartTwo'
import HeaderPartThree from "./header_partThree/HeaderPartThree"

const Header = ({ categories , products  }) => {
    return (
        <>
            <header id='top'>
                <HeaderPartOne />
                <HeaderPartTwo products={products} />
                <HeaderPartThree data={categories} />
            </header>
        </>
    )
}

export default Header