import HeaderPartOne from './header_partOne/HeaderPartOne'
import HeaderPartTwo from './header_partTwo/HeaderPartTwo'
import HeaderPartThree from "./header_partThree/HeaderPartThree"

const Header = () => {
    return (
        <>
            <header id='top'>
                <HeaderPartOne />
                <HeaderPartTwo />
                <HeaderPartThree />
            </header>
        </>
    )
}

export default Header