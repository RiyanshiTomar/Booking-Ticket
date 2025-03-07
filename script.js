function bookTicket() {
    document.getElementById("displaySummary").style.display = "block";
    document.getElementById("lblMovie").textContent = document.getElementById("lstMovies").value;
    document.getElementById("lblLocation").textContent = document.getElementById("lstCinemas").value;
    document.getElementById("lblDate").textContent = document.getElementById("lstDates").value;
    document.getElementById("lblTime").textContent = document.getElementById("lstTimes").value;
    document.getElementById("lblSeats").textContent = document.getElementById("lstOptions").value;

    movieName = document.getElementById("lstMovies").value;
    poster = document.getElementById("poster");
    screen = "";

    if (movieName == "ZNMD") {
        poster.src = "https://th.bing.com/th/id/OIP.3O7UveLOMJO72DsyzOvtEQHaKs?rs=1&pid=ImgDetMain";
        screen = "SCCREEN-1"
    } else  if(movieName == "YJHD"){
        poster.src = "https://th.bing.com/th/id/OIP.whXXNZ6g3znDAPPyuhqpGQHaEo?rs=1&pid=ImgDetMain";
        screen = "SCREEN-2";
    } else{
        document.getElementById("poster").style.display = "none";
        poster.alt = "Cant'display....First Select Movie"
    }
    document.getElementById("lblScreen").textContent = screen;
}
