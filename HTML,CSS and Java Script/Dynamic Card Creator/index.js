console.log("Dynamic Card Creator");
function createcard(thumbnail, description, channel, views, timeago) {
    let strViews;
    if (views >= 1000000) {
        strViews = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        strViews = (views / 1000).toFixed(1) + "K";
    } else {
        strViews = views.toString();
    }

    let time;
    if (timeago > 365) {
        time = Math.floor(timeago / 365) + " years";
    } else if (timeago > 30) {
        time = Math.floor(timeago / 30) + " months";
    } else if (timeago > 7) {
        time = Math.floor(timeago / 7) + " weeks";
    } else {
        time = timeago + " days";
    }

    let html = `
    <div class="card">
        <div class="image">
            <img class="img" src="${thumbnail}" alt="Thumbnail">
        </div>
        <div class="content">
           <h2>${description}</h2>
           <p class="para">${channel} • ${strViews} views • ${time} ago</p>
        </div>
    </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
createcard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBVqvXVrDszwXm78ucYc3WNSpXnaMsWH_qg&s,jsjjshd,hdysg", "best", "hotel", 10000000, 278);