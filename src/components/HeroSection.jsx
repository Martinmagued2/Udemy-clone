import background from "../images/img_4.png"

function Hero() {
    return (
        <section style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#F7F9FA', padding: '56px 0'
        }}>
            <div style={{
                background: '#fff', borderRadius: '18px', padding: '36px', boxShadow: '0 2px 16px rgba(35, 50, 75, 0.08)'
            }}>
                <h1 style={{ fontSize: '2.5rem', color: '#2d2f31', marginBottom: '16px' }}>
                    Jump into learning — for less
                </h1>
                <p style={{ color: '#50535b', marginBottom: '22px' }}>
                    If you're new to Udemy, we've got good news: For a limited time, courses start at just £259.99 for new learners!
                </p>
                <button style={{
                    background: '#6615DD',
                    color: '#fff',
                    fontWeight: 600,
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none'
                }}>
                    Sign up now
                </button>
            </div>
            <img
                src={background}
                alt="hena"
                style={{
                    height: '260px',
                    marginLeft: '34px'
                }}
            />
        </section>
    );
}
export default Hero;
