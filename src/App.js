import React from 'react';
import { AudioPlayer } from './components/audio-player/audio-player.jsx';
import { ContentTitle } from './components/centerblock/contenttitle.jsx';
import { Filter } from './components/centerblock/filter.jsx';
import { PlaylistItem } from './components/centerblock/playlistitem.jsx';
import { Search } from './components/centerblock/search.jsx';
import { NavLogo } from './components/navigation/logo.jsx';
import { NavBurger } from './components/navigation/navburger.jsx';
import { NavMenu } from './components/navigation/navmenu.jsx';
import { BtnNext } from './components/playlist/btn-next.jsx';
import { BtnPlay } from './components/playlist/btn-play.jsx';
import { BtnPrev } from './components/playlist/btn-prev.jsx';
import { BtnRepeat } from './components/playlist/btn-repeat.jsx';
import { BtnShuffle } from './components/playlist/btn-shuffle.jsx';
import { LikeDis } from './components/playlist/like-dis.jsx';
import { TrackPlay } from './components/playlist/track-play.jsx';
import { Volume } from './components/playlist/volume.jsx';
import { Item } from './components/sidebar/item.jsx';
import { Personal } from './components/sidebar/personal.jsx';
import { Collection } from './components/skeleton-screen/collection.jsx';
import { ForPlayer } from './components/skeleton-screen/for-player.jsx';
import { ShadowSkelet } from './components/skeleton-screen/skeleton-screen.jsx';
import './css/style.css';

function App() {
    const [navMenu, setNavMenu] = React.useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
    const [isTrackVisible, setIsTrackVisible] = React.useState(false);
    const [isPlayerVisible, setIsPlayerVisible] = React.useState(false);


    React.useEffect(()=> {
        setTimeout (()=> {
            setIsTrackVisible(true)
            setIsSidebarVisible(true)
            setIsPlayerVisible(true)
        }

        , 5000)
    },[])



    function ShowModalWindow() {
        if (navMenu) {
            console.log("Work")
            return <NavMenu />
        }
        else {
            return <></>
        }
    }

return (
    <div className="wrapper">
        <div className="container">
            <main className="main">
                <nav className="main__nav nav">
                    <NavLogo />
                    <div onClick={() => setNavMenu(!navMenu)}>
                        <NavBurger />
                    </div>
                    <ShowModalWindow />
                </nav>
                <div className="main__centerblock centerblock">
                    <Search />
                    {/* <AudioPlayer/> */}
                    <h2 className="centerblock__h2">Треки</h2>
                    <Filter />
                    <div className="centerblock__content">
                        <ContentTitle />
                        <div className="content__playlist playlist">
                            {isTrackVisible ? [1,2,3,4,5,6,7,8,9,10].map(()=>  <PlaylistItem /> ) :<ShadowSkelet/> } 
                        </div>                        
                    </div>
                </div>
                <div className="main__sidebar sidebar">
                    <Personal />
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            {isSidebarVisible 
                            ? <React.Fragment>
                                <Item />
                                <Item />
                                <Item />
                            </React.Fragment> 
                            : <Collection />}
                            
                        </div>
                    </div>
                </div>
            </main>
            <div className="bar">
                <div className="bar__content">
                    <div className="bar__player-progress"></div>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <BtnPrev />
                                <BtnPlay />
                                <BtnNext />
                                <BtnRepeat />
                                <BtnShuffle />
                            </div>
                            <div className="player__track-play track-play">
                                {isPlayerVisible ? <TrackPlay /> :  <ForPlayer/>}
                                
                                <LikeDis />
                            </div>
                        </div>
                        <Volume />
                    </div>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    </div>
);
}

export default App;
