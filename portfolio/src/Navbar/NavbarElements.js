import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #FA7F82;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100w - 1000px) / 2);
    z-index: 10;
    position: fixed;
`

export const NavLink = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: stretch;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-left: 5rem;
    margin-right: 5rem;

    &.active {
        color: #FFFFFF;
    }
    &:hover {
        color: #414141;
    }
`