// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

//import './index.css'
//import './index1.css'

//import {lotr} from './components.js'
//AFRAME.registerComponent('lotr', lotr)

//import {splashImageComponent} from './splash-image'
//AFRAME.registerComponent('splash-image', splashImageComponent)

//import {cubeEnvMapComponent} from './components/cubemap-static'
//import {cubeMapRealtimeComponent} from './components/cubemap-realtime'
//import {responsiveImmersiveComponent} from './components/responsive-immersive'
//import {
  //portalCameraComponent, tapToPlacePortalComponent,
  //promptFlowComponent, spinComponent,
//} from './components/portal-components'
//import {noteCreatorComponent, optimizeThreejsWorldMatrixUpdates} from './components/note-creator'

//AFRAME.registerComponent('note-creator', noteCreatorComponent)
//AFRAME.registerComponent('portal-camera', portalCameraComponent)
//AFRAME.registerComponent('spin', spinComponent)

//AFRAME.registerComponent('prompt-flow', promptFlowComponent)
//AFRAME.registerComponent('tap-to-place-portal', tapToPlacePortalComponent)

//AFRAME.registerComponent('cubemap-static', cubeEnvMapComponent)
//AFRAME.registerComponent('cubemap-realtime', cubeMapRealtimeComponent)

//AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})

// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall web app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
AFRAME.registerComponent('score', {
  schema: {
    width: {default: 10},
    height: {default: 10},
  },
  init() {
    this.camera = this.el
    this.isInPortalSpace = false
    this.wasOutside = true
    const ring = document.getElementById('ring')
    const followMe = document.getElementById('followMe')
    const nameLabel = document.getElementById('name-label')
    /* const fog = document.getElementById('fog')
    const fog2 = document.getElementById('fog2')
    const fog3 = document.getElementById('fog3')
    */const fog4 = document.getElementById('fog4')
    const fog5 = document.getElementById('fog5')
    const fog6 = document.getElementById('fog6')
    // const playit = document.getElementById('playit')
    const surface = document.getElementById('surface')

    this.overlay = document.getElementById('overlay')

    this.prompt2 = document.getElementById('promptText2')
    this.prompt3 = document.getElementById('promptText3')
    this.prompt4 = document.getElementById('promptText4')
    let enteredOnce = 0
    const soundWait = new window.Howl({
      src: [require('./assets/audio/wait.mp3')],
      loop: false,
    })
    const soundForging = new window.Howl({
      src: [require('./assets/audio/forging.mp3')],
      loop: false,
    })
    const soundEngraving = new window.Howl({
      src: [require('./assets/audio/engraving.mp3')],
      loop: false,
    })
    const soundPower = new window.Howl({
      src: [require('./assets/audio/power.mp3')],
      loop: false,
    })
    const soundSfx = new window.Howl({
      src: [require('./assets/audio/sfx.mp3')],
      loop: false,
    })

    const soundbgm = new window.Howl({
      src: [require('./assets/audio/bgm.mp3')],
      autoplay: true,
      loop: true,
      volume: 0.1,
    })
    soundbgm.play()
    const soundbgfire = new window.Howl({
      src: [require('./assets/audio/fire.mp3')],
      autoplay: true,
      loop: true,
      volume: 0.1,
    })
    soundbgfire.play()

    document.getElementById('start').addEventListener('click', (event) => {
      document.getElementById('start').style.display = 'none'
      document.getElementById('splashimage').style.display = 'none'
      /*let nft = document.getElementById('myDIV3')
      nft.style.display="block"
      let btn2 = document.getElementById('btn2')
      btn2.style.display="block"
      let btn3 = document.getElementById('btn3')
      btn3.style.display="block"
      let nftlogo = document.getElementById('nftlogo')
      nftlogo.style.display="block"
      let ringmove = document.getElementById('ringmove')
      ringmove.style.display="block"*/
    })

    document.getElementById('myDIV3').addEventListener('click', (event) => {
      let nft = document.getElementById('myDIV3')
      nft.style.display="none"
      let btn2 = document.getElementById('btn2')
      btn2.style.display="none"
      let btn3 = document.getElementById('btn3')
      btn3.style.display="none"
      let ringmove = document.getElementById('ringmove')
      ringmove.style.display="none"
    })

    document.getElementById('btn').addEventListener('click', (event) => {
      document.getElementById('fname1').style.display = 'block'
      document.getElementById('inputAnswer').style.display = 'block'
      document.getElementById('submitButton').style.display = 'block'
      document.getElementById('clickme1').style.display = 'none'
      document.getElementById('myDIV2').style.display = 'none'
      document.getElementById('clickmeback').style.display = 'none'
      document.getElementById('btn').style.display = 'none'
    })

    document.getElementById('clickme').addEventListener('click', (event) => {
      document.getElementById('notap').style.display = 'none'
      document.getElementById('notap').style.zIndex = '1'
      document.getElementById('l2').style.display = 'block'

      setTimeout(() => {
        ring.setAttribute('animation', 'property: position; to: 0 7 -8; dur: 4000; easing: linear')
      }, 4000)
      this.el.sceneEl.addEventListener('entered', () => {
        followMe.setAttribute('visible','false')
        if (enteredOnce === 0) {
          enteredOnce = 1
          document.getElementById('btn1').addEventListener('click', () => {
            document.getElementById('btn1').style.display='none'
            document.getElementById('l2').style.display = 'none'
            setTimeout(() => {
              surface.setAttribute('animation', 'property: position; to: -60 -10 0; dur: 4000; easing: linear')
            }, 0)
            setTimeout(() => {
              surface.setAttribute('animation__2', 'property: position; to: 10 -10 -30; dur: 4000; easing: linear')
              surface.setAttribute('animation__rotate', 'property: rotation; to: 0 -35 0; dur: 4000; easing: linear')
            }, 4000)
            setTimeout(() => {
              surface.setAttribute('animation__3', 'property: position; to: 35 -10 80; dur: 3000; easing: linear')
              surface.setAttribute('animation__rotate1', 'property: rotation; to: 0 50 0; dur: 3000; easing: linear')
            }, 8000)

            setTimeout(() => {
              surface.setAttribute('animation__5', 'property: position; to: -45 -10 80; dur: 3000; easing: linear')
              surface.setAttribute('animation__rotate2', 'property: rotation; to: 0 3 0; dur: 3000; easing: linear')
            }, 11000)

            soundWait.play()
            setTimeout(() => {
              ring.setAttribute('animation__scale', 'property: scale; to: .5 .5 .5; dur: 8000; easing: linear')
              ring.setAttribute('animation__3', 'property: position; to: 3 35 -410; dur: 8000; easing: linear')
              this.overlay.style.display = 'block'
              this.prompt2.innerHTML = 'Your ring is going to get<br> forged now.'
              soundForging.play()
              this.prompt2.classList.add('fly-in')
            }, 17000)
            setTimeout(() => {
              this.prompt2.classList.add('fly-out')
              ring.setAttribute('animation__4', 'property: position; to: 3 -35 -410; dur: 4000; easing: linear')
              soundSfx.play()
            }, 21000)
            setTimeout(() => {
              this.overlay.style.display = 'block'
              this.prompt3.innerHTML = 'Engraving your name on<br> the ring.'
              soundEngraving.play()
              this.prompt3.classList.add('fly-in')
              nameLabel.setAttribute('visible', 'true')
              ring.setAttribute('animation__5', 'property: position; to: 3 35 -410; dur: 4000; easing: linear')
            }, 25000)
            setTimeout(() => {
              ring.setAttribute('animation__scale2', 'property: scale; to: .05 .05 .05; dur: 6000; easing: linear')
              ring.setAttribute('animation__6', 'property: position; to: 0 7 -7; dur: 6000; easing: linear')
            }, 31000)
            setTimeout(() => {
              this.prompt3.classList.add('fly-out')
              this.prompt4.innerHTML = 'The Power of the ring is<br> now yours!'
              this.prompt4.classList.add('fly-in')
              soundPower.play()
            }, 33000)
            setTimeout(() => {
              ring.setAttribute('animation__7', 'property: rotation; to: 0 90 120; dur: 3000; easing: linear')

              this.prompt4.classList.add('fly-out')
              
            }, 36000)
            setTimeout(() => {
              let nft = document.getElementById('myDIV3')
              nft.style.display="block"
              let btn2 = document.getElementById('btn2')
              btn2.style.display="block"
              let btn3 = document.getElementById('btn3')
              btn3.style.display="block"
              let nftlogo = document.getElementById('nftlogo')
              nftlogo.style.display="block"
              let ringmove = document.getElementById("ringmove")
              ringmove.style.display='block'
            }, 38000)
          })
        }
      })
    })
  },
  tick() {
    const {position} = this.camera.object3D
    const isOutside = position.z < 0
    const withinPortalBounds =
      position.y < this.data.height && Math.abs(position.x) < this.data.width / 2
    if (this.wasOutside !== isOutside && withinPortalBounds) {
      this.isInPortalSpace = !isOutside
      // if (!isOutside) {
      // this.el.sceneEl.emit('entered')
      // }
    }
    // function draw() {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')
    const text = document.getElementById('inputAnswer').value
    ctx.strokeStyle = 'yellow'
    ctx.fillStyle = '#f55302'
    ctx.font = '24px morris'
    ctx.fillText(text, 0, 30)
    // }
    // window.addEventListener("keyup", draw, true);

    // const l22 = document.getElementById('l22')
    // l22.addEventListener('click', function(event) {
    // document.getElementById('share').setAttribute('visible', true)
    // })

    // Your name will soon appear on the ring.

    this.wasOutside = isOutside
  },

})