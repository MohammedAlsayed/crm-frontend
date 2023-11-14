
function app_rtl() {
    if(isAr()){
        document.querySelector("html").setAttribute("lang", "ar");
        document.querySelector("html").setAttribute("dir", "rtl");
    }else {
        document.querySelector("html").setAttribute("lang", "en");
        document.querySelector("html").removeAttribute("dir", "rtl");
    }
}

function main_rtl(){
    app_rtl();
    if(isAr()){
        // change the main content position
        document.documentElement.style.setProperty("--leftMain", "0px");
        document.documentElement.style.setProperty("--rightMain", "calc(var(--offcanvas-width) + 20px)");
    }
    else{
        // change the main content position
        document.documentElement.style.setProperty("--leftMain", "calc(var(--offcanvas-width) + 20px)");
        document.documentElement.style.setProperty("--rightMain", "0px");
    }
}
function sidebar_rtl(){
    main_rtl();
    if(isAr()){
        document.querySelector("aside").setAttribute("class", "offcanvas offcanvas-end sidebar-nav");
        // rotate the arrow of the sidebar toggle button
        document.documentElement.style.setProperty("--arToggleBtnTransform", "rotate(180deg)");
    }
    else{
        document.querySelector("aside").setAttribute("class", "offcanvas offcanvas-start sidebar-nav");
        // rotate the arrow of the sidebar toggle button
        document.documentElement.style.setProperty("--arToggleBtnTransform", "rotate(0deg)");
    }
}

function header_rtl(){
    sidebar_rtl();
    if(isAr()){
        // get navbar-nav button and change the class to navbar-nav-ar 
        document.querySelector(".navbar-nav").setAttribute("class", "navbar-nav me-auto");

        // get first decendant div under navbar-nav and change the class to navbar-nav-ar
        document.querySelector(".navbar-nav > li > div").setAttribute("class", "dropdown-menu dropdown-menu-start");

    }
    else{
        // get navbar-nav button and change the class to navbar-nav-ar 
        document.querySelector(".navbar-nav").setAttribute("class", "navbar-nav ms-auto");
        // get div under navbar-nav and change the class to navbar-nav-ar
        document.querySelector(".navbar-nav > li > div").setAttribute("class", "dropdown-menu dropdown-menu-end");
    }    
}

function datatables_rtl(){
    header_rtl();
    if(isAr()){
        document.querySelector(".dataTables_filter").setAttribute("class", "dataTables_filter pull-left");
    }
    else{
        document.querySelector(".dataTables_filter").setAttribute("class", "dataTables_filter");
    }
}


function isAr(){
    var lang = document.cookie.split('=')[1];
    if(lang === "AR"){
        return true;
    }else{
        return false;
    }
}

export {app_rtl, main_rtl, sidebar_rtl, header_rtl, datatables_rtl};