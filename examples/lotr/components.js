AFRAME.registerComponent('lotr', {
    init() {
      console.log(1)
      document.getElementById('submitButton').addEventListener('click', (event) => {
        document.querySelector('#submitButton').style.display = 'none'
        document.querySelector('#inputAnswer').style.display = 'none'
        document.querySelector('#fname1').style.display = 'none'
        document.querySelector('#myDIV').style.display = 'block'
      })
  
  
      //const ring = document.getElementById('ring')
     // const rockmove = document.getElementById('rockmove')
      //document.getElementById('clickme').addEventListener('click', function(event) {
        //ring.setAttribute("visible",true)
        //rockmove.setAttribute('visible', true)
     // })
      
      const text = document.getElementById('text12')
      
      document.getElementById('clickme').addEventListener('click', function(event) {
      text.innerHTML = 'Tap Once And<br> Wait For 3 Seconds.<br> (Please Tap Once)'
      text.classList.add('fly-in')
      } , { once: true })
  
      //this.el.sceneEl.addEventListener('entered', () => {
        //this.overlay.style.display = 'block'
        //this.text1.innerHTML = 'Welcome to Our Vinery<br>Take a Look Around'
       // this.text11.classList.add('fly-in')
      //})
  
      
    },
  })
  
  // AFRAME components can only be registered once and cannot be easily unregistered. It is often
  // useful to wrap their registration in a method that can be called multiple times without error.
  
 // export {lotr}