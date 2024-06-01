import React, { useState } from 'react';
import FrontPage from './FrontPage';
import { Unity, useUnityContext } from 'react-unity-webgl';

const MainPage = () => {
    const [showUnity, setShowUnity] = useState(false);

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "Build/WebGL_Builds.loader.js",
        dataUrl: "Build/WebGL_Builds.data",
        frameworkUrl: "Build/WebGL_Builds.framework.js",
        codeUrl: "Build/WebGL_Builds.wasm",
    });

    const handleStartGame = () => {
        setShowUnity(true);
    };

    return (
        <div>
            {showUnity ? (
                <Unity
                    unityProvider={unityProvider}
                    style={{ width: "100%", height: "100vh" }}
                />
            ) : (
                <FrontPage onStartGame={handleStartGame} />
            )}
        </div>
    );
};

export default MainPage;
