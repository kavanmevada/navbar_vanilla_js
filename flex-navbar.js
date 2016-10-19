flexnav = function(ele, sub) {
  //Declaration of width and height with container width and height
  var timeout = 500;
  var closetimer = 0;
  var ddmenuitem = 0;
  var ddmenulink = 0;
  //console.log(sub);
  // Private slider methods
  methods = {
    close_menu: function() {
      if (ddmenuitem) {
        //ddmenuitem.style.display = 'none';
        ddmenuitem.style.opacity = '0';
        ddmenuitem.style.maxHeight = '0';
      }
      if (ddmenulink) {
        ddmenulink.classList.remove('active');
      }
    },
    close_menu_timer: function() {
      closetimer = window.setTimeout(function() {
        methods.close_menu();
      }, timeout);
    },
    cancel_close_menu_timer: function() {
      if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
      }
    }
  };
  el = {
    open_menu: function(ele, sub) {
      // cancel close timer
      methods.cancel_close_menu_timer();
      // close old layer
      if (ddmenuitem) {
        ddmenuitem.style.maxHeight = '0';
        ddmenuitem.style.opacity = '0';
      }
      if (ddmenulink) {
        ddmenulink.classList.remove('active');
      }
      // get new layer and show it
      ddmenuitem = sub;
      ddmenulink = ele;
      ele.classList.add('active');
      ddmenuitem.style.maxHeight = '400px';
      //ddmenuitem.style.display = 'block';
      ddmenuitem.style.opacity = '1';
    }
  };
  defaults = {
    first: function(ele) {
      ele.children[0].addEventListener("mouseover", function() {
        el.open_menu(ele, sub);
      }, false);
    },
    second: function(ele) {
      ele.children[0].addEventListener("mouseout", function() {
        methods.close_menu_timer();
      }, false);
    },
    third: function(ele) {
      ele.children[1].addEventListener("mouseover", function() {
        methods.cancel_close_menu_timer();
      }, false);
    },
    forth: function(ele) {
      ele.children[1].addEventListener("mouseout", function() {
        methods.close_menu_timer();
      }, false);
    },
    fifth: function() {
      document.addEventListener("click", function() {
        methods.close_menu();
      }, false);
    }
  };
  defaults.first(ele);
  defaults.second(ele);
  defaults.third(ele);
  defaults.forth(ele);
};
var menu_sub = document.querySelectorAll('.menu_toggle');
//console.log(menu_sub);
for (var i = 0; i < menu_sub.length; i++) {
  flexnav(menu_sub[i], menu_sub[i].children[1]);
}


//Mobile Menu events
document.getElementsByClassName('mob_menu_toggle')[0].addEventListener('click', function(e){
    e.stopPropagation();
});
window.addEventListener('click', function(e) {
  document.querySelector('.nav').classList.remove('active');
});
document.getElementsByClassName('mob_menu_toggle')[0].addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});
document.getElementsByClassName('container')[0].addEventListener('click', function(e) {
    e.stopPropagation();
})
