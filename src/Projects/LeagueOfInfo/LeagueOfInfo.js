import React, { useEffect, useState } from 'react'
/* Uses ActionReminder.css */

function LeagueOfInfo() {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='actionMainContainer'>
            <div className='backgroundTextARTitle noSelect'
                style={{
                    transform: `translateY(${offsetY * .8}px)`,
                }}>League of Info</div>
            <div className='mainARDescription'>
                The apps area of use is mainly to search for another player on the servers EUW or EUNE in League of Legends.<br />
                You are able to see information standard information about the user, e.g. level, rank and and recent matches.<br />
                The app also has a champion array where you can search for a specific champion and see detailed information about them.
            </div>
            <div className='mainARContainer'>


                <div className='sectionPRContainer'>
                    <div className='sectionPRText'>
                        <div className='sectionPRTitle'>Search screen</div>
                        <div className='sectionPRDescription'>
                            Uses input string to fetch user for an endpoint, changes depending on selected server. Can change search server between
                            Europe West (EUW) and Europe North {"&"} East (EUNE). Saves last searched user in
                            <a className='linkTextPR'
                                href='https://github.com/react-native-async-storage/async-storage'
                                target={"_blank"}>AsyncStorage.</a> That user will be shown as a placeholder next time,
                            and user can press right arrow for instant search.
                        </div>
                    </div>
                    <div className='sectionPRGif'>
                        <img className="gifStylePR"
                            src={require("../../assets/LeagueOfInfo/search.gif")}
                        />
                    </div>
                </div>

                <div className='dividerARDiv'></div>

                <div className='sectionPRContainer'>
                    <div className='sectionPRText'>
                        <div className='sectionPRTitle'>User information</div>
                        <div className='sectionPRDescription'>
                            Displays fetched information from the user endpoint.
                            <ul>
                                <li>Profile icon, border and level</li>
                                <li>Rank, division and league points (LP)</li>
                                <li>Most played champion</li>
                            </ul>
                        </div>
                    </div>
                    <div className='sectionPRGif'>
                        <img className="gifStylePR"
                            src={require("../../assets/LeagueOfInfo/userDetails.gif")} />
                    </div>
                </div>

                <div className='dividerARDiv'></div>

                <div className='sectionPRContainer'>
                    <div className='sectionPRText'>
                        <div className='sectionPRTitle'>Champion search</div>
                        <div className='sectionPRDescription'>
                            Takes input string and loops through the champion array and compares input to name.
                            The images are saved locally. When selecting a champion their id and key are sent to next screen
                            as additional data with
                            <a className='linkTextPR'
                                href='https://reactnavigation.org/'
                                target={"_blank"}>React Navigation.</a>
                        </div>
                    </div>
                    <div className='sectionPRGif'>
                        <img className="gifStylePR"
                            src={require("../../assets/LeagueOfInfo/champSearch.gif")} />
                    </div>
                </div>

                <div className='dividerARDiv'></div>

                <div className='sectionPRContainer'>
                    <div className='sectionPRText'>
                        <div className='sectionPRTitle'>Champion details</div>
                        <div className='sectionPRDescription'>
                            Fetches champion information with the additional data sent through navigation with route.params.<br />
                            Screen displays:
                            <ul>
                                <li>Searched users mastery points</li>
                                <li>Champion background (Lore)</li>
                                <li>All Abilities</li>
                                <li>Base stats</li>
                            </ul>
                        </div>
                    </div>
                    <div className='sectionPRGif'>
                        <img className="gifStylePR"
                            src={require("../../assets/LeagueOfInfo/champDetails.gif")} />
                    </div>
                </div>

                <div className='dividerARDiv'></div>

                <div className='sectionPRContainer'>
                    <div className='sectionPRText'>
                        <div className='sectionPRTitle'>Match history</div>
                        <div className='sectionPRDescription'>
                            Shows last 10 matches the user has played, can fetch 9 additonal matches from endpoint.
                            The API poll rate limit was 20 requests every 5 sec, so I limited the requests by dividing the match history into 10-9.
                            Each match card displays:
                            <ul>
                                <li>Champion and items</li>
                                <li>Summoner spells and runes</li>
                                <li>Gamemode and game duration</li>
                                <li>Kills/Deaths/Assists and creep score (CS)</li>
                                <li>Red line = Loss, Green = Win</li>
                            </ul>
                        </div>
                    </div>
                    <div className='sectionPRGif'>
                        <img className="gifStylePR"
                            src={require("../../assets/LeagueOfInfo/matchHistory.gif")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeagueOfInfo