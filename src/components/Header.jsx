function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 48px',
            background: '#fff',
            borderBottom: '1px solid #f0f0f0',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.85rem', color: '#6615dd', letterSpacing: '-0.5px' }}>UdemyClone</span>
                <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#50535b',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                }}>
                    Explore
                </button>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <input
                    type="text"
                    placeholder="Search for anything"
                    style={{
                        width: '410px',
                        padding: '10px 16px',
                        borderRadius: '24px',
                        border: '1px solid #d1d7dc',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                <nav style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                    <a href="#" style={{ color: '#50535b', fontWeight: 500, textDecoration: 'none' }}>Plans & Pricing</a>
                    <a href="#" style={{ color: '#50535b', fontWeight: 500, textDecoration: 'none' }}>Udemy Business</a>
                    <a href="#" style={{ color: '#50535b', fontWeight: 500, textDecoration: 'none' }}>Teach on Udemy</a>
                </nav>
                <button
                    style={{
                        background: '#fff',
                        color: '#6615dd',
                        border: '1.5px solid #6615dd',
                        fontWeight: 600,
                        borderRadius: '6px',
                        padding: '8px 24px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                    Log In
                </button>
                <button
                    style={{
                        background: '#6615dd',
                        color: '#fff',
                        border: 'none',
                        fontWeight: 700,
                        borderRadius: '6px',
                        padding: '8px 24px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                    Sign Up
                </button>
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                    }}
                    title="Language">
                    🌐
                </button>
                <span style={{ fontSize: "1.3rem", marginLeft: "4px", cursor: "pointer" }}>🛒</span>
            </div>
        </header>
    );
}
export default Header;
