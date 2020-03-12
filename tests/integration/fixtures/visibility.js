it('visibility', () => {
  return new Promise((resolve) => {
    function setStyle(dom, object) {
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          dom.style[key] = object[key];
        }
      }
    }

    const container1 = document.createElement('div');
    document.body.appendChild(container1);
    setStyle(container1, {
      backgroundColor: '#f40',
      width: '200px',
      height: '200px',
    });

    const container2 = document.createElement('div');
    container2.appendChild(document.createTextNode('visibility test'));
    setStyle(container2, {
      backgroundColor: '#999',
      width: '100px',
      height: '100px',
    });

    container1.appendChild(container2);

    container1.addEventListener('click', () => {
      console.log('container clicked');
    });
    container2.addEventListener('click', () => {
      console.log('inner clicked');
    });

    requestAnimationFrame(function () {
      setStyle(container2, {
        visibility: 'hidden',
      });
      resolve();
    });
  });
});