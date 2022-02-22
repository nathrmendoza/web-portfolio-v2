
const Layout = ({children, pagename}) => {
    return (
        <main className={'page-' + pagename}>
            {children}
        </main>
    )
}

export default Layout