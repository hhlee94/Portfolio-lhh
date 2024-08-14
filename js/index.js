$("document").ready(function () {
  let typed = new Typed("#typed1", {
    stringsElement: "#typed",
    typeSpeed: 100,
  });

  const swiper = new Swiper(".swiper.web-swiper", {
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    loop: true,
  });

  const swiper2 = new Swiper(".swiper.design-swiper", {
    breakpoints: {
      360: { spaceBetween: 20, slidesPerView: 1 },
      1024: { spaceBetween: 30, slidesPerView: 2 },
      1200: { spaceBetween: 40, slidesPerView: 3 },
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });

  let isChk = false;

  // 없는것을 임의로 만들어둠 false 일 때는 실행하지 않음, > 이걸 ture로 만들어줘서 왔다갔다 할때 실행되지 않도록 하는 원리...........
  // 프로그레스바가 중첩으로 실행되는것을 막아줌

  $(".fullpage").fullpage({
    sectionsColor: ["#140a42", "#f1f0f5", "#f1f0f5", "#f1f0f5", "#f1f0f5"],
    navigation: true,
    anchors: ["home", "profile", "publishing", "design", "contact", "footer"],

    navigationTooltips: [
      "홈",
      "프로필",
      "퍼블리싱",
      "디자인",
      "컨텍트",
      "카피라이트",
    ],

    responsiveWidth: 1200,
    afterLoad: function (origin, destination) {
      console.log(destination);
      if (destination == 1) {
        $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on");
      }
      //툴팁

      if (destination == 2 && isChk == false) {
        isChk = true;
        let bar = new ProgressBar.Line("#html", {
          strokeWidth: 5,
          trailWidth: 5,
          color: "#FF5733",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar.animate(0.7);

        let bar2 = new ProgressBar.Line("#css", {
          strokeWidth: 5,
          trailWidth: 5,
          color: "#FF5733",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar2.animate(0.5);

        let bar3 = new ProgressBar.Line("#js", {
          strokeWidth: 5,
          trailWidth: 5,
          color: "#FF5733",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar3.animate(0.3);

        let bar4 = new ProgressBar.Line("#ps", {
          strokeWidth: 5,
          trailWidth: 5,
          color: "#FF5733",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar4.animate(1);

        let bar5 = new ProgressBar.Line("#ai", {
          strokeWidth: 5,
          trailWidth: 5,
          color: "#FF5733",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar5.animate(0.9);

        // let bar6 = new ProgressBar.Line("#of", {
        //   strokeWidth: 4,
        //   trailWidth: 4,
        //   color: "#fac8c8",
        //   duration: 1400,
        //   step: function (state, circle) {
        //     circle.setText(Math.round(circle.value() * 100) + "%");
        //   },
        // });
        // bar6.animate(0.8);
      }
    },
    onLeave: function (origin, destination) {
      if (destination > 1) {
        $(".header").fadeIn();
      } else {
        $(".header").fadeOut();
      }
      // $(".header").show().eq(destination-1).hide()

      $("#fp-nav ul li .fp-tooltip")
        .removeClass("on")
        .eq(destination - 1)
        .addClass("on");
      $(".header .nav ul li")
        .removeClass("on")
        .eq(destination - 2)
        .addClass("on");
    },
  });
});
