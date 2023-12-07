

const lineMarker = () => {

 if(typeof window !== 'undefined'){
    function tp_tab_line_2() {
      var marker = document.querySelector('#lineMarker');
      var item = document.querySelectorAll('.tp-marker-tab button');
      var itemActive = document.querySelector('.tp-marker-tab .nav-link.active');
  
      function indicator(e) {
        marker.style.left = e.target.offsetLeft + 'px';
        marker.style.width = e.target.offsetWidth + 'px';
      }
  
      item.forEach((link) => {
        link.addEventListener('click', (e) => {
          indicator(e);
        });
      });
  
      var activeNav = document.querySelector('.nav-link.active');
  
      // Additional check for activeNav
      if (activeNav) {
        var activewidth = activeNav.offsetWidth;
        var activePadLeft = parseFloat(window.getComputedStyle(activeNav).paddingLeft);
        var activePadRight = parseFloat(window.getComputedStyle(activeNav).paddingRight);
        var totalWidth = activewidth + activePadLeft + activePadRight;
  
        var precedingAnchorWidth = anchorWidthCounter();
  
        marker.style.display = 'block';
        marker.style.width = totalWidth + 'px';
  
        function anchorWidthCounter() {
          var anchorWidths = 0;
  
          item.forEach(function (elem) {
            var activeTest = elem.classList.contains('active');
            marker.style.left = elem.offsetLeft + 'px';
  
            if (activeTest) {
              // Break out of the loop.
              return;
            }
  
            var aWidth = elem.offsetWidth;
            var aPadLeft = parseFloat(window.getComputedStyle(elem).paddingLeft);
            var aPadRight = parseFloat(window.getComputedStyle(elem).paddingRight);
            var aTotalWidth = aWidth + aPadLeft + aPadRight;
  
            anchorWidths += aTotalWidth;
          });
  
          return anchorWidths;
        }
      }
    }

    tp_tab_line_2();

  }

};

export default lineMarker;



