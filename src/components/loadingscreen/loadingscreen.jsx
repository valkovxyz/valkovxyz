import {Screen} from "@/components/loadingscreen/loadingscreen.styles";
import {Balls} from "@/components/loadingscreen/balls";

const LoadingScreen = () => {
    return (
        <Screen>
            <Balls>
                <div className="ball one"></div>
                <div className="ball two"></div>
                <div className="ball three"></div>
            </Balls>
        </Screen>
    );
};

export default LoadingScreen;

