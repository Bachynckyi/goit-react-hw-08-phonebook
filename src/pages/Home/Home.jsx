import { useNavigate } from "react-router-dom";
import imagePhonebook from "./phonebook.png";
import imageJS from "./JS.png"
import imageReact from "./React.png";
import imageSASS from "./SASS.png";
import imageHTML from "./html.png";
import scss from "./Home.module.scss";
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className={scss.mainTitle}>Your phonebook</h1>
            <div className={scss.container}>
                <img src={imagePhonebook} alt="phonebook" className={scss.phonebookImg}/>
                <button 
                    type="button" 
                    onClick={() => {navigate('/register');}}
                    className={scss.btn}>
                    Get Started !
                </button>
            </div>
            <div>
                <h5 className={scss.titleHome}>This project created by:</h5>
                <div className={scss.imageContainer}>
                    <img  src={imageJS} alt="JavaScript" className={scss.imgType}/>
                    <img  src={imageReact} alt="React" className={scss.imgType}/>
                    <img  src={imageSASS} alt="SASS" className={scss.imgType}/>
                    <img  src={imageHTML} alt="SASS" className={scss.imgType}/>
                </div>
            </div>
        </>
    );
};

export default Home;