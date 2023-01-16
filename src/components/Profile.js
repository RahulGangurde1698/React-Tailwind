import React from "react";
import img from '../photo.jpg';
const Profile = () => {
    const info = [
        { text: "Years experience", count: "Fresher" },
        { text: "Completed Projects", count: "9" }
    ];
    return (
        <section id="about" className="py-10 text-black">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold text-black">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto text-black">
                                My name is Rahul Gangurde and I have completed MERN Stack web development. I am skilled in HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB, Postman, Git, GitHub and React JS. Done graduation in bacholor of engineering in mechanical with 7.64 CGPA .

                               <p className="text-black" > Some of the technical skills in which I am proficient are:</p>
                                👉 JavaScript for practicing Data Structures and Algorithms. <br/>
                                👉 HTML, CSS, Bootstrap, JavaScript, React JS for Frontend Development.<br/>
                                👉 NodeJS, Express, MongoDB for Backend Development.<br/><br/>

                            </p>

                              <a href=" https://github.com/RahulGangurde1698" className=" text-cyan-300">GitHub Profile</a> <br/>
                              <a href="  https://portfoliorahulgangurde.netlify.app/" className=" text-cyan-300">Portfolio</a> <br/>
                              <a href="  https://www.linkedin.com/in/rahul-gangurde-659a44169" className=" text-cyan-300">Linkedin Profile</a> <br/>

                              <p className="text-black"> Contact me at  : gangurderahul26@gmail.com</p>
                              <p className="text-black"> Contact no.  : 9766882803, 7020861145</p>



                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-black">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <a href="https://portfoliorahulgangurde.netlify.app/Rahul%20Gangurde_CV.pdf" download>
                                <button className="btn-primary text-black">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full  sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img
                                src={img}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;