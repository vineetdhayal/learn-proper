import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
    const { pathname } = useLocation();
    const pathNames = pathname.split('/').filter((z) => z);
    let path = '';
    return (
        <div>
            <Link to="/">Home</Link>
            {pathNames.map((p, index) => {
                path += `/${p}`;
                const isLast = pathNames.length - 1 === index;

                return isLast ? <span>/ {p}</span> : <span>/ <Link to={path}>{p}</Link></span>
            })}
        </div>
    )
}

export default BreadCrumb
