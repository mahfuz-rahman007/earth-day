window.addEventListener("DOMContentLoaded", () => {
  // start the animation when the element is in the page view
  const elements = [].slice.call(document.querySelectorAll(".pie"));
  const circle = new CircularProgressBar("pie");

  // circle.initial();

  if ("IntersectionObserver" in window) {
    const config = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const ovserver = new IntersectionObserver((entries, observer) => {
      entries.map((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
          circle.initial(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, config);

    elements.map((item) => {
      ovserver.observe(item);
    });
  } else {
    elements.map((element) => {
      circle.initial(element);
    });
  }


  $(document).ready(function () {

    let jsonData;

    // Get Json Data
    $.getJSON('data.json', function(data) {
      jsonData = data;
    });

  
    // OnClick Pie Update
    $(".dot").on("click", function (e) {
      let btn = $(this).data("attr");

      $('.ideal-tree').text(jsonData[btn].name);
      $('.test-text').text(jsonData[btn].text);
      $('.big-title').text(jsonData.big_title);
  
      // update circle when range change
      const pie = document.querySelectorAll(".pie");
  
      pie.forEach((el, index) => {
        const options = {
          index: index + 1,
          percent: jsonData[btn][$(el).data('type')],
        };
        circle.animationTo(options);
      });
  
    });

  
  });

});

