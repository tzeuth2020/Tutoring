import React from "react";
import personal_photo from "../images/IMG_7554.jpg";
import OgLogo from "../images/oga-logo-ret.jpeg";



export function MainBody() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-9">
                    <h2 className="mt-5" id="about-me">About Me</h2>
                    <p className="basic-text">Hello!  My name is Kathryn Zeuthen and I have been tutoring students with language learning disabilities since 1992.  I have a BA in Psychology from Rhodes College and a M.Ed. in Learning Disabilities  from Georgia State University.  I received my Orton Gillingham training from The Schenck School in Atlanta.  I am a Certified Member of the Academy of Orton-Gillingham Practitioners and Educators.  I continue my certification and education each year through the Academy. </p>
                    <h2 className="mt-5" id="policies">Tutoring Policies</h2>
                    <ul>
                        <li className="basic-text">60 Minute Sessions</li>
                        <li className="basic-text">Billed Weekly</li>
                        <li className="basic-text">Sessions cancelled within 24 hours will be charged a full sesion.</li>
                        <li className="basic-text">Sessions begin on time and finish at the end of 60 minutes </li>
                    </ul>
                    <h2 className="mt-5" id="what-is">What is Orton-Gillingham?</h2>
                    <p className="basic-text">
                    Orton-Gillingham is a multi-sensory and explicit instructional approach to teaching students having difficulties with reading (decoding), spelling and writing associated with dyslexia.
                    For maximum success with O-G tutoring, 2-3 times a week is suggested.  Making it through the entire sequence can take 2-4 years depending on the student.  Students who attend sessions consistently through a calendar year progress at a steady pace.  With O-G tutoring, there is not one specific path, but we will work together to assess and tweak the plan as we move through the sequence and monitor your child’s progress.  
                    For additional information on Orton-Gillingham, please visit the <a href="http://www.ortonacademy.org/for-parents/introductory-course-on-the-orton-gillingham-approach/"> Orton-Gillingham site</a>. 
                    There are many Orton-Gillingham programs on the market.  I pull from many of the programs but I use the Wilson Language Program as my foundation.  I really like this program because of the emphasis on reading in context which many others do not include.  If you want to learn more about Wilson, please visit <a href="http://www.wilsonlanguage.com">their page</a>. </p>
                    <h2 className="mt-5" id="what-is">Contact</h2>
                    <p className="basic-text"> Email: kzeuthen15@gmail.com</p>
                </div>
                <div className="col-sm-3">
                    <img className="img-fluid" src={personal_photo} alt="Responsive image" id="personal-photo"/>
                    <div style={{ marginTop: '100px' }}></div>
                    <img className ="img-fluid" src={OgLogo} alt="Responsive image" id="og-logo"/>
                </div>
            </div>
        </div>
    );
}