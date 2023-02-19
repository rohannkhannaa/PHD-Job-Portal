import { Link } from "react-scroll";
import React from "react";
import Personal from './Personal';
import Academic from './Academic';
import "./Profile.css";

export default function Profile() {
const [screenWidth] = React.useState(window.innerWidth);
  return (
    <>
    {screenWidth >= 1024 ? (
        <> 
        <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="personal" duration={200}>
              Personal
              </Link>
            </li>
            <li>
              <Link
               activeClass="active"
                smooth
                spy
                to="academic"
                duration={200}>
                Academic
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experience" duration={200}>
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="publication" duration={200}>
                 Publications
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="reference" duration={200}>
                 References
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="other" duration={200}>
                 Other Details
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        </>
    ) : <> {alert("Here")} </>
  }
    <div className="Profile"> 
      <section id="personal">
        <Personal/>
      </section>
      <section id="academic">
        <Academic/>
        </section>
      <section id="experience">Experience</section>
      <section id="publication">Publications</section>
      <section id="reference">Refrees</section>
      <section id="other">Other details</section>
      
    </div>
    </>
  );
}
