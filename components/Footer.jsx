/*  ./components/Footer.jsx     */
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>eComerce Marketplace</h4>
              <h1 className="list-unstyled">
                <li>342-420-6969</li>
                <li>Newark, New Jersey</li>
                <li>123 NJIT South North</li>
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Services</h4>
              <ul className="list-unstyled">
                <li>Purchase</li>
                <li>Products</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Social Media</h4>
              <ul className="list-unstyled">
                <li>Instgram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} eComerce Marketplace, LLC | All
              rights reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
