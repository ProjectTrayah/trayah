import './index.css';

const Home = () => {
    return (
        <div class="container">
            <h1 class="logo">Project Trayah</h1>
            <div class="content">
                <p>Website Is Under Development</p>
                <h1>We're&nbsp;<span>Launching</span>&nbsp;
                    <span>Soon</span></h1>
                <div class="launch-time">
                    <div>
                        <p></p>
                    </div>
                </div>
                <button type="button">Learn More<img src={require("../../images/triangle.png")} /></button>
            </div>
            <img src={require("../../images/rocket.png")} class="rocket" />
        </div>
    )
}

export default Home
