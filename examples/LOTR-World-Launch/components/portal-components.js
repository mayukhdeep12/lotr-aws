// This component hides and shows certain elements as the camera moves
const portalCameraComponent = {
    schema: {
      width: {default: 10},
      height: {default: 10},
    },
    init() {
      this.camera = this.el
      this.contents = document.getElementById('portal-contents')
      this.walls = document.getElementById('hider-walls')
      this.portalWall = document.getElementById('portal-wall')
      this.portalVideo = document.getElementById('portalVideo')
      this.isInPortalSpace = false
      this.wasOutside = true
    },
  
    tick() {
      const {sceneEl} = this.el
      var counter = 0;
      var t1;
      const {position} = this.camera.object3D
      const isOutside = position.z > 0
      const withinPortalBounds =
        position.y < this.data.height && Math.abs(position.x) < this.data.width / 2
      if (this.wasOutside !== isOutside && withinPortalBounds) {
        this.isInPortalSpace = !isOutside
        if(!isOutside)
        {
            sceneEl.emit('entered')
          
          //document.getElementById('worm').setAttribute("animation-mixer", "timeScale", "1")
          /*setTimeout(myFunction()
          {
            document.getElementById('testplane').setAttribute('visible', "true")
          } , 2000)*/
  
          t1 = setInterval(function(){
              if (counter < 100) {
                counter += 1
              } 
             
              if(counter===5)
              {
                  
                  sceneEl.emit('dismissPrompt12')
                  
              }
              
            }, 1000);
          
        }
        
      }
      this.contents.object3D.visible = this.isInPortalSpace || isOutside
      this.walls.object3D.visible = !this.isInPortalSpace && isOutside
      this.portalWall.object3D.visible = this.isInPortalSpace && !isOutside
      this.portalVideo.object3D.visible = isOutside
      this.wasOutside = isOutside
    },
  }
  
  const tapToPlacePortalComponent = {
    init() {
      const {sceneEl} = this.el
      const recenterBtn = document.getElementById('recenterButton')
  
      this.camera = document.getElementById('camera')
      this.contents = document.getElementById('portal-contents')
      this.walls = document.getElementById('hider-walls')
      this.portalWall = document.getElementById('portal-wall')
      this.isInPortalSpace = false
      this.wasOutside = true
  
      const portalHiderRing = this.el.sceneEl.querySelector('#portalHiderRing')
      const portalRim = this.el.sceneEl.querySelector('#portalRim')
      const portalVideo = this.el.sceneEl.querySelector('#portalVideo')
      const portalShadow = this.el.sceneEl.querySelector('#portalShadow')
      const ring = this.el.sceneEl.querySelector('#ring')
      const surface = this.el.sceneEl.querySelector('#surface')
      const fog1 = this.el.sceneEl.querySelector('#fog')
      const fog2 = this.el.sceneEl.querySelector('#fog2')
      const fog3 = this.el.sceneEl.querySelector('#fog3')
      const fog4 = this.el.sceneEl.querySelector('#fog4')
      const fog5 = this.el.sceneEl.querySelector('#fog5')
      const fog6 = this.el.sceneEl.querySelector('#fog6')
      const rain = this.el.sceneEl.querySelector('#rain')
      const text = document.getElementById('text12')
      //const text44 = document.getElementById('text44')
      
      const playit = this.el.sceneEl.querySelector('#playit')
      //const ring = document.getElementById('ring')
      //const followMe = document.getElementById('followMe')
      //const nameLabel = document.getElementById('name-label')
      //const rockmove = document.getElementById('rockmove')
  
       
  
      const handleClickEvent = (e) => {
        if (!e.touches || e.touches.length < 2) {
          recenterBtn.classList.add('pulse-once')
          sceneEl.emit('recenter')
          setTimeout(() => {
            recenterBtn.classList.remove('pulse-once')
          }, 200)
        }
      }
  
      const firstPlaceEvent = (e) => {
        sceneEl.emit('recenter')
        sceneEl.emit('dismissPrompt')
  
       let text44 = document.getElementById('text44')
       text44.innerHTML = 'Move Forward to <br>Enter the portal'
  
        portalHiderRing.setAttribute('animation__1', {
          property: 'radius-inner',
          dur: 1500,
          from: '0.001',
          to: '3.5',
          easing: 'easeOutElastic',
        })
  
     /*   portalRim.setAttribute('animation__2', {
          property: 'scale',
          dur: 1500,
          from: '0.001 0.001 0.001',
          to: '4.3 4.3 4.3',
          easing: 'easeOutElastic',
        })*/
  
        portalVideo.setAttribute('animation__3', {
          property: 'scale',
          dur: 1500,
          from: '0.001 0.001 0.001',
          to: '18 10 1',
          easing: 'easeOutElastic',
        })
  
        portalShadow.setAttribute('animation__4', {
          property: 'scale',
          dur: 1500,
          from: '0.001 0.001 0.001',
          to: '15.5 2 11',
          easing: 'easeOutElastic',
        })
        ring.setAttribute('visible', true)
        surface.setAttribute('visible', true)
        /*fog1.setAttribute('visible', true)
        fog2.setAttribute('visible', true)
        fog3.setAttribute('visible', true)*/
        /*rain.setAttribute('visible', true)*/
        fog5.setAttribute('visible', true)
        fog6.setAttribute('visible', true)
        text.innerHTML = 'Tap Once And<br> Wait For 3 Seconds.'
        text.classList.add('fly-out')
        
  
        
        
        //rockmove.setAttribute('visible', true')
        sceneEl.removeEventListener('click', firstPlaceEvent)
       // recenterBtn.addEventListener('click', handleClickEvent, true)
  
        
       
      }
  
      sceneEl.addEventListener('click', firstPlaceEvent)
    },
  }
  
  const promptFlowComponent = {
    init() {
      this.prompt = document.getElementById('promptText')
      this.prompt1 = document.getElementById('promptText1')
      
      this.overlay = document.getElementById('overlay')
  
      this.el.sceneEl.addEventListener('realityready', () => {
        this.overlay.style.display = 'block'
        //this.prompt.innerHTML = 'Tap Once And<br> Wait For 3 Seconds.'
        //this.prompt.classList.add('fly-in')
      })
  
      //this.el.addEventListener('dismissPrompt', () => {
        //this.prompt.classList.remove('fly-in')
        //this.prompt.classList.add('fly-out')
      //})
  
      this.el.sceneEl.addEventListener('entered', () => {
        
        this.overlay.style.display = 'block'
        this.prompt1.innerHTML = 'Click on "Start Your Journey"<br> to Experience'
        this.prompt1.classList.add('fly-in')
        let text44 = document.getElementById('text44')
        text44.style.display = 'none'
  
        let btn1 = document.getElementById('btn1')
        btn1.style.display="block";
        /*let text55 = document.getElementById('text55')
        text55.classList.add('fly-in')
            text55.innerHTML = '5'
            setTimeout(() => {
              text55.innerHTML = '4'
            },1000)
            setTimeout(() => {
              text55.innerHTML = '3'
            },2000)
            setTimeout(() => {
              text55.innerHTML = '2'
            },3000)
            setTimeout(() => {
              text55.innerHTML = '1'
            },4000)
            setTimeout(() => {
              text55.classList.add('fly-out')
            },5000)*/
      })
  
      this.el.sceneEl.addEventListener('dismissPrompt12', () => {
       
        this.prompt1.classList.add('fly-out')
      })
    },
  }
  
  const spinComponent = {
    schema: {
      speed: {default: 2000},
      direction: {default: 'normal'},
      axis: {default: 'y'},
    },
    init() {
      const {el} = this
      el.setAttribute('animation__spin', {
        property: `object3D.rotation.${this.data.axis}`,
        from: 0,
        to: 360,
        dur: this.data.speed,
        dir: this.data.direction,
        loop: true,
        easing: 'linear',
      })
    },
  
  }
  
  export {portalCameraComponent, tapToPlacePortalComponent, promptFlowComponent, spinComponent}
  
  