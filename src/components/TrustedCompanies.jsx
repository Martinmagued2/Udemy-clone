import VW from "../images/img_5.png"
import samsung from "../images/img_6.png"
import cisco from "../images/img_7.png"
import vimeo from "../images/img_8.png"
import PG from "../images/img_9.png"
import HPE from "../images/img_10.png"
import citi from "../images/img_11.png"
import ericsson from "../images/img_12.png"

const companies = [
    { name: "Volkswagen", logo: VW },
    { name: "SAMSUNG", logo: samsung },
    { name: "Cisco", logo: cisco },
    { name: "Vimeo", logo: vimeo },
    { name: "P&G", logo: PG },
    { name: "HPE", logo: HPE },
    { name: "Citi", logo: citi },
    { name: "Ericsson", logo: ericsson }
];
function TrustedCompanies() {
    return (
        <section style={{
            padding: "28px 0", background: "rgb(255,242,242)", textAlign: "center"
        }}>
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: "12px", color: "#50535b" }}>
                Trusted by over 17,000 companies and millions of learners around the world
            </div>
            <div style={{
                display: "flex", gap: "48px", justifyContent: "center", alignItems: "center", marginTop: "10px"
            }}>
                {companies.map((company) => (
                    <img src={company.logo} alt={company.name} style={{ height: "38px", opacity: "0.8" }} key={company.name} />
                ))}
            </div>
        </section>
    );
}
export default TrustedCompanies;
