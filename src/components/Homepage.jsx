import { assets } from "../assets/assets";

const Homepage = ({toggle}) =>{
    return (
        <div className="flex my-50 mx-25 gap-2">
            <div>
                <img className="w-200" src={assets.dices} alt="Dice" />
            </div>
            <div className="flex flex-col items-end justify-center">
                <h1 className="text-9xl font-bold ">DICE GAME</h1>
                <button className="bg-black text-white mt-8 text-4xl p-4 font-bold rounded-2xl cursor-pointer" onClick={toggle}>PLAY NOW</button>
            </div>
        </div>
    )
}
export default Homepage;