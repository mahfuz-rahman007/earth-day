const JSON_DATA = {
  "big_title" : "Tree Planting Robot Soil Panel",
  "button1": {
      "text": "Mr. X should test his garden soil using the NPK sensor and adjust the nutrient levels if needed before planting the mango trees. Applying the recommended fertilizers and incorporating organic matter like compost can help achieve these ideal values.",
      "name": "Mango",
      "soil": 60,
      "nit": 40,
      "pho": 70,
      "pot": 36
  },
  "button2": {
      "text": "Mr. X should test his garden soil using the NPK sensor and adjust the nutrient levels if needed before planting the apple trees. Applying the recommended fertilizers and incorporating organic matter like compost can help achieve these ideal values.",
      "name": "Apple",
      "soil": 40,
      "nit": 20,
      "pho": 90,
      "pot": 46
  },
  "button3": {
      "text": "Mr. X should test his garden soil using the NPK sensor and adjust the nutrient levels if needed before planting the orage trees. Applying the recommended fertilizers and incorporating organic matter like compost can help achieve these ideal values.",
      "name": "Orange",
      "soil": 70,
      "nit": 29,
      "pho": 65,
      "pot": 89
  }
}

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

    let jsonData = JSON_DATA;
  
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

