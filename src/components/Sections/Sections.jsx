import "./Sections.scss";


function Sections() {
    return (
        <section className="hero">
            <div className="hero__container">
                <h3 className="hero__subheading">Hi there, I'm</h3>
                <h1 className="hero__heading">Yuvraj Sirohi.</h1>
                <h2 className="hero__statement">A Web Developer on a mission.</h2>
                {/* <h2 className="hero__statement">Crafting Digital Solutions with Precision.</h2>
                <h2 className="hero__statement">Transforming Ideas into Seamless Reality.</h2> */}
                <p className="hero__paragraph">In the ever-evolving world of web development, I find my passion in turning complex challenges into elegant solutions. With expertise in HTML, CSS, JavaScript, Node, React, and more, I embrace every opportunity to push the boundaries of what can be achieved. Together, let's bring your ideas to life and make a meaningful impact in the digital realm.</p>
                <a className="hero__button">Discover my work</a>
            </div>
        </section>
    );
}

export default Sections;