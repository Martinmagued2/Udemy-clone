import banner from "../images/img_13.png"
function AICareerBanner() {
    return (
        <section style={{
            background: '#232347', color: '#fff', borderRadius: '24px',
            padding: '48px', margin: '32px', display: 'flex', alignItems: 'center', gap: '32px'
        }}>
            <div>
                <h2 style={{ fontSize: '2rem' }}>Reimagine your career in the AI era</h2>
                <p style={{ color: '#ccc', margin: '16px 0' }}>
                    Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
                </p>
                <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', padding: 0, margin: '20px 0' }}>
                    <li>⭐ Learn AI and more</li>
                    <li>🏆 Prep for a certification</li>
                    <li>📝 Practice with AI coaching</li>
                    <li>⚡ Advance your career</li>
                </ul>
                <button style={{
                    background: '#fff',
                    color: '#222',
                    fontWeight: 700, padding: '12px 28px', borderRadius: '6px', border: 'none'
                }}>
                    Learn more
                </button>
                <div style={{ marginTop: '14px', color: '#ccc' }}>Starting at £204.00/month</div>
            </div>
            <div>
                {/* Replace with your images or illustrations */}
                <img src={banner} alt="" style={{ height: '200px', borderRadius: '18px' }} />
            </div>
        </section>
    );
}
export default AICareerBanner;
