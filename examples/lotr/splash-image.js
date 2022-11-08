// Note: Setting disableWorldTracking=true and requestGyro=true
// basically gives you 3DoF mode
AFRAME.registerComponent('splash-image', {
    schema: {
      disableWorldTracking: {type: 'bool', default: false},
      requestGyro: {type: 'bool', default: false},
    },
    init() {
      const splashimage = document.getElementById('splashimage')
      const start = document.getElementById('start')
      start.style.display = 'block'
  
      const addXRWeb = () => {
        if (this.data.requestGyro === true && this.data.disableWorldTracking === true) {
          // If world tracking is disabled, and you still want gyro enabled (i.e. 3DoF mode)
          // Request motion and orientation sensor via XR8's permission API
          XR8.addCameraPipelineModule({
            name: 'request-gyro',
            requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
          })
        }
        this.el.sceneEl.setAttribute('xrweb', `disableWorldTracking: ${this.data.disableWorldTracking}`)
  
        splashimage.classList.add('hidden')
  
        // Play background music (mp3) after user has clicked "Start AR" and the scene has loaded.
        this.el.sceneEl.addEventListener('realityready', () => {
          
        })
      }
      start.onclick = addXRWeb
    },
  })
  
//  export {splashImageComponent}