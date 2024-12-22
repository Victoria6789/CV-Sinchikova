import React from "react";
import profilePic from "../assets/profile.jpg";
import './AuthorInfo.css'; 

const AuthorInfo = () => {
  return (
    <div className="author-info">
      <div className="author-container">
        <img
          src={profilePic}
          alt="Sinchikova Victoria"
          className="profile-picture"
        />
        
        <div className="text-container">
          <h2 className="name">SINCHIKOVA VICTORIA</h2>
          <p className="job-title">Web Developer</p>
          
          <div className="additional-info">
            <p>
              I am currently a student at the Mechanics and Mathematics Faculty of Belarusian State University, where I have honed my skills in programming and mathematics. This strong foundation enables me to approach complex problems with confidence and creativity.
            </p>
            <p>
              With two years of experience in software development, I have successfully collaborated on various projects, both independently and as part of a team. I am proficient in C++, JavaScript, React, HTML/CSS, and I am eager to apply this expertise to real-world challenges.
            </p>
            <p>
              I am enthusiastic about contributing to your team and am committed to achieving our shared goals. Additionally, I am always open to personal and professional growth, ready to embrace new learning opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-languages-section">
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>C++</li>
            <li>JavaScript / React</li>
            <li>Figma</li>
            <li>HTML/CSS</li>
          </ul>
          <h3>Contacts</h3>
        <div className="contacts">
          <p>
            Email: <a href="mailto:sinchikovavik.com">sinchikovavik.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Victoria6789">Victoria6789</a>
          </p>
          <p>
            Social Media: <a href="https://t.me/sefirka_02">Telegram</a>
          </p>
        </div>
        </div>
        <div className="languages">
          <h3>Language Proficiency</h3>
          <ul>
            <li>English Level: B2</li>
            <li>Russian: Native Speaker</li>
          </ul>
          <h3>Work Experience</h3>
          <ul>
            <li>Self-employment</li>
            <li>Studies at BSU</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;