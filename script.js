if (!sessionStorage.getItem('date')) {
    sessionStorage.setItem('date', new Date());
}

let timer = () => {
    let date = sessionStorage.getItem('date');
    setInterval(() => {
        let hours = Math.trunc((new Date() - new Date(date))/1000/60/60);
        hours = hours < 10 ? `0${hours}` : hours;
        let minutes = Math.trunc((new Date() - new Date(date))/1000/60) - hours*60;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds = Math.trunc((new Date() - new Date(date))/1000) - minutes*60 - hours*60*60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        let timer = `${hours}:${minutes}:${seconds}`;
        document.querySelector('.timer').textContent = timer;
    }, 1000);
}

timer();

function activity() {
    const state = { 'page_id': 1};
    const title = '';
    const url = 'activity';
    history.pushState(state, title, url);
    document.querySelector('.now').classList.remove('now')
    document.querySelector('.activity').classList.add('now');
    router.set( 'activity' );
}

function map_btn() {
    const state = { 'page_id': 2};
    const title = '';
    const url = 'map';
    history.pushState(state, title, url)
    document.querySelector('.now').classList.remove('now')
    document.querySelector('.map_btn').classList.add('now');
    router.set( 'map' );
    navigator.geolocation.getCurrentPosition((pos) => {
        a = pos.coords.latitude;
        b = pos.coords.longitude;
        async function initMap() {
            await ymaps3.ready;
            const {YMap, YMapDefaultSchemeLayer} = ymaps3;
            const map = new YMap(
                document.querySelector('.map'),
                {
                    location: {
                        center: [b, a],
                        zoom: 15
                    }
                }
            );
            document.querySelector('.map').classList.add('map_active');
            map.addChild(new YMapDefaultSchemeLayer());
            let loader = document.querySelector('.loader');
            loader.classList.remove('loader')
        }
        initMap();
    });
}

function time_btn() {
    const state = { 'page_id': 3};
    const title = '';
    const url = 'timer';
    history.pushState(state, title, url);
    document.querySelector('.now').classList.remove('now')
    document.querySelector('.timer_btn').classList.add('now');
    router.set( 'timer' );
}

const PageType = {
    MainPage: "activity",
    MapPage: "map",
    TimerPage: "timer",

    DefaultPage: "activity"
  };
  
  const activityPage = () => {
    return (`<section>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 content">
                <div class="post1">
                    <img class="picture" src="img/abstract-purple-digital-art-retrowave-wallpaper 1.jpg" alt="">
                    <div class="comment">
                        <div class="comment_preview icon_text">
                            <img class="icon24" src="icons/comment.svg" alt="">
                            <p><span class="blue">Jason Anderson</span> commented:</p>
                        </div>
                        <div class="comment_text">
                            <div class="line">

                            </div>
                            <div>
                            <p class="comment_text">
                                Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. 
                            </p>
                            <p class="comment_info">
                                – Jason, 10:30 am
                            </p>
                            </div>
                        </div>
                        <div class="comment_interface">
                            <figure class="icon_text">
                                <img class="icon24" src="icons/views.svg" alt="">
                                <figcaption>432</figcaption>
                            </figure>
                            <figure class="icon_text">
                                <img class="icon24" src="icons/comment.svg" alt="">
                                <figcaption>47</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="post2">
                    <p>Sunset Sunset Sunset</p>
                    <figure class="icon_text">
                        <img class="icon24" src="icons/time.svg" alt="">
                        <figcaption>53 minutes ago</figcaption>
                        <button class="btn_down"><img class="icon24" src="icons/down.svg" alt=""></button>
                    </figure>
                </div>
                <div class="post3">
                    <p>Morning of Siberia</p>
                    <figure class="icon_text">
                        <img class="icon24" src="icons/time.svg" alt="">
                        <figcaption>56 minutes ago</figcaption>
                        <button class="btn_down"><img class="icon24" src="icons/down.svg" alt=""></button>
                    </figure>
                </div>
            </div>
            <div class="col-lg"></div>
            <div class="col-lg-3">
                <div class="user_profile text-center">
                    <img src="img/Avatar.png" alt="">
                    <p class="name">Hanna Dorman</p>
                    <p class="skills">UX/UI designer</p>
                    <div class="contacts">
                        <img class="icon20" src="icons/tg.svg" alt="">
                        <img class="icon20" src="icons/hh.svg" alt="">
                        <img class="icon20" src="icons/twitter.svg" alt="">
                    </div>
                </div>
                <div class="navigation__block">
                    <div class="n">
                        <p>Navigation</p>
                        <img class="icon20" src="icons/upper.svg" alt="">
                    </div>
                    <div class="bottom_line">
                            
                    </div>
                    <div>
                        
                    <div class="user_info">
                        <div class="icon_text">
                            <img class="icon24" src="icons/profile.svg" alt="">
                            <p>My profile</p>
                        </div>
                        <div class="balance">
                            <div class="icon_text">
                            <img class="icon24" src="icons/balance.svg" alt="">
                            <p>Balance</p>
                            </div>
                            <p class="balance_score">$ 1,430</p>
                        </div>
                        <div class="connections">
                            <div class="icon_text">
                                <img class="icon24" src="icons/connections.svg" alt="">
                                <p>Connections</p>
                            </div>
                            <p class="score red">29</p>
                        </div>
                        <div class="icon_text friends">
                            <img class="icon24" src="icons/friends.svg" alt="">
                            <p>Friends</p>
                        </div>
                    </div>
                    <div class="bottom_line">
                            
                    </div>
                    <div class="user_info">
                        <div class="events">
                            <div class="icon_text">
                                <img class="icon24" src="icons/events.svg" alt="">
                                <p>Events</p>
                            </div>
                            <p class="score green">45</p>
                        </div>
                        <div class="icon_text settings">
                            <img class="icon24" src="icons/settings.svg" alt="">
                            <p>Account settings</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="share_block">
                    <div class="navigation_btn icon_text">
                        <p>Share your thoughts</p>
                        <img class="icon20" src="icons/upper.svg" alt="">
                    </div>
                    <div class="bottom_line">
                            
                    </div>
                    <div class="share_add">
                        <textarea name="" id="" placeholder="Enter your message..."></textarea>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`)
  };
  const mapPage = () => {
    return (`<section class="content_map">
    <div class="content_menu">
        <p>Basic map</p>
        <div class="icons">
            <img class="icon24" src="icons/down.svg" alt="">
            <img class="icon24" src="icons/reload.svg" alt="">
            <img class="icon24" src="icons/close.svg" alt="">
        </div>
    </div>
    <div class="content_block">
        <span class="loader"></span>
        <div class="map">

        </div>
    </div>
</section>`);
  };
  const timerPage = () => {
    return (`<section class="timer_block">
    <div class="content_menu">
        <p>Timer</p>
        <div class="icons">
            <img class="icon24" src="icons/down.svg" alt="">
            <img class="icon24" src="icons/reload.svg" alt="">
            <img class="icon24" src="icons/close.svg" alt="">
        </div>
    </div>
    <div class="content_timer_block">
        <div class="timer">
            
        </div>
    </div>
</section>`);
  }
  
  const templates = {
    [ PageType.MainPage ]: activityPage,
    [ PageType.MapPage ]: mapPage,
    [ PageType.TimerPage ]: timerPage,
  }
  
  const router = {
    set( routeType ){
      document.body.querySelector('.main').innerHTML = templates[ routeType ]();
    }
  };
  
router.set(PageType.DefaultPage);