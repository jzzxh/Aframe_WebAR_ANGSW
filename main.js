  
  
  var anges_s
  var angle_deg
	var state = 0
  var sts

  //var xstate = 0
		  
/*
      // This component hides and shows certain elements as the camera moves
      AFRAME.registerComponent('portal', {
        schema: {
          width: {default: 4},
          height: {default: 6},
          depth: {default: 1},
        },
        init: function(){
		
          this.camera = document.getElementById('camera')
          this.contents = document.getElementById('portal-contents')
		  
		  

		  
        },
        tick: function() {
		
          const position = this.camera.object3D.position
          const rotation = this.camera.object3D.rotation
		  
		      content_info_pos = this.contents.object3D.position
		      content_info_ro = this.contents.object3D.rotation
		  
		     const obj_Pos = this.contents.object3D.position
		  
		     const angleRad = Math.atan2(position.z - obj_Pos.z, position.x - obj_Pos.x)
		  
		     anges_s = (angleRad).toFixed(2)
          
         angle_deg = ((angleRad).toFixed(2) * (180/Math.PI)).toFixed(2)

		   
		     document.getElementById('PosX').innerHTML = ("PostioX: " + (position.x).toFixed(2))
		     document.getElementById('PosY').innerHTML = ("PostioY: " + (position.y).toFixed(2))
		     document.getElementById('PosZ').innerHTML = ("PostioZ: " + (position.z).toFixed(2))
		     document.getElementById('OriX').innerHTML = ("OriX: " + (rotation.x).toFixed(2))
		     document.getElementById('OriY').innerHTML = ("OriY: " + (rotation.y).toFixed(2))
		     document.getElementById('OriZ').innerHTML = ("OriZ: " + (rotation.z).toFixed(2))		  
		     document.getElementById('angle').innerHTML = ("angle: " + ((angleRad).toFixed(2) * (180/Math.PI)).toFixed(2))		  	
		     document.getElementById('state_s').innerHTML = sts
		  
		  
		  if(anges_s < 0.6 && anges_s > -1 ){	 
		  	sts = "Right Area"		
		  }else if(anges_s < -1.5 && anges_s > -2 ){ 
			  sts = "Back Area"		  
		  }else if(anges_s < -2.2 && anges_s > -3.1 ){		  
		  	sts = "Left Area"		  
		  }else{		  
		  	sts = "UnTrack Area"	
		  }
		  
      }
		
		
 })
	  
	  
	AFRAME.registerComponent('playvid', {

			init: function () {
			
			  const obj3D = this.el.object3D
				const v1 = document.querySelector('#vid1')
				const v2 = document.querySelector('#vid2')
				const v3 = document.querySelector('#vid3')

        
        
				const el = this.el
        const scene = this.el.sceneEl
        
        
				
        const playvideos = function(){

            obj3D.visible = false  
            v1.pause()
            v2.pause()
            v3.pause()
                    
        }

        const pvid = function(evt){

          
            el.setAttribute('material','src','#vid1')
            obj3D.visible = true 
            v1.play()
            v2.pause()
            v3.pause()

            //document.getElementById('state_t').innerHTML = v1.currentTime
            
        }

        const kvid = function(evt){

          el.setAttribute('material','src','#vid2')
          obj3D.visible = true 
          v2.play()
          v1.pause()
          v3.pause()
        } 

        const nvid = function(evt){

          el.setAttribute('material','src','#vid3')
          obj3D.visible = true 
          v3.play()
          v1.pause()
          v2.pause()
      }     
      
        const stx = function(evt){
        
          v1.pause()
         v2.pause()
          v3.pause()
          obj3D.visible = false
      }

        scene.addEventListener('realityready',playvideos)		

        scene.addEventListener('playvid1evt',pvid)			
        scene.addEventListener('playvid2evt',kvid)			
        scene.addEventListener('playvid3evt',nvid)			
        scene.addEventListener('stops',stx)			
				
      },
      
      tick: function(){

        if(anges_s < 0.6 && anges_s > -1 ){
         
          this.el.emit('playvid1evt',{value:1})

       }else if(anges_s < -1.5 && anges_s > -2  ){
     
          this.el.emit('playvid2evt',{value:1})

       }else if(anges_s < -2.2 && anges_s > -3.1  ){

          this.el.emit('playvid3evt',{value:1})
 
       }else{
     
         this.el.emit('stops',{value:1})
 

      }

    }
	})

  AFRAME.registerComponent('seekvid', {

          init: function(){
            const obj3D = this.el.object3D
            const v =  document.getElementById('vid4')
            const el = this.el
            const scene = this.el.sceneEl
            

            obj3D.visible = true

            const one = function(evt){

                v.currentTime = 2
                v.pause()

            }

            const two = function(evt){

                v.currentTime = 3
                v.pause()

            }   
            
            const three = function(evt){

                v.currentTime = 4
                v.pause()

            }            
            const stopv = function(evt){

                v.currentTime = 0
                v.pause()

            }             

            scene.addEventListener('angleone',one)
            scene.addEventListener('angletwo',two)
            scene.addEventListener('anglethree',three)
            scene.addEventListener('anglestop',stopv)


          },
          
          tick: function(){

            if(anges_s < 0.6 && anges_s > -1 ){
         
             this.el.emit('angleone',{value:1})
        
           }else if(anges_s < -1.5 && anges_s > -2  ){
     
            this.el.emit('angletwo',{value:1})
          
           }else if(anges_s < -2.2 && anges_s > -3.1  ){

            this.el.emit('anglethree',{value:1})
        
          }else{
     
            this.el.emit('anglestop',{value:1})
          }           
        }

  })
*/
var xstate = 0
var curTimes = 0

  AFRAME.registerComponent('target-vids', {
    schema:{
        name:{type: 'string'}
    },

    init: function(){
          
            const obj3D = this.el.object3D
            const el = this.el
            const scene = this.el.sceneEl
            
            const v1 = document.getElementById('vid1')
            const v2 = document.getElementById('vid2')
            const v3 = document.getElementById('vid3')
           // const setvVidentity = document.getElementById('setvid1').object3D

            const setvidOp1 = document.getElementById('vvid1')
            const setvidOp2 = document.getElementById('vvid2')
            const setvidOp3 = document.getElementById('vvid3')


            



            this.camera = document.getElementById('camera')
        
            obj3D.visible = false
            //setvVidentity.visible = false


            setvidOp1.setAttribute('opacity',0)
            setvidOp2.setAttribute('opacity',0)
            setvidOp3.setAttribute('opacity',0)



            v1.pause()
            v2.pause()
            v3.pause()

            scene.emit('recenter')


            const showImgge = ({detail}) =>{
                if(detail.name != this.data.name){
                  return
                }

                
                
                const position = this.camera.object3D.position

                const angleRad = Math.atan2(position.z - detail.position.z, position.x - detail.position.x)

                angle_deg = ((angleRad).toFixed(2) * (180/Math.PI)).toFixed(2)

                document.getElementById('angle').innerHTML = ("angle: " + angle_deg)		  

                
                obj3D.position.copy(detail.position)
                obj3D.quaternion.copy(detail.rotation)
                obj3D.scale.set(detail.scale,detail.scale,detail.scale)
                obj3D.visible = true
                


                

                //object position
                //var qua = new THREE.Quaternion(detail.rotation.x ,detail.rotation.y,detail.rotation.z,detail.rotation.w)
               // qua.setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI/2)
                
               // setvVidentity.position.copy(detail.position)
               // setvVidentity.quaternion.copy(qua)
                //setvVidentity.rotation.y = 90
               // setvVidentity.scale.set(detail.scale * .15 ,detail.scale * .15,detail.scale * .15)
               // setvVidentity.visible = true

                // if angle
          
                
                if(angle_deg < 70 && angle_deg > 0){
                  
                  this.el.emit('setvid1',{value:1})
                  state = 1
                  
                }else if(angle_deg < -40 && angle_deg > -80 ){

                  this.el.emit('setvid2',{value:1})
                  state = 2

                }else if( (angle_deg < -110 && angle_deg >= -180) || (angle_deg > 140 && angle_deg <= 180)){

                  this.el.emit('setvid3',{value:1})
                  state = 3
                }
                else{

                  if(state == 1){
                    curTimes = v1.currentTime
                  }else if(state == 2){
                    curTimes = v2.currentTime
                  }else if(state == 3){
                    curTimes = v3.currentTime
                  }

                  this.el.emit('setvidx',{value:1})
                }
                

                //end if engle

                

                document.getElementById('PosX').innerHTML = ("PostioX: " + (detail.position.x).toFixed(2))
                document.getElementById('PosY').innerHTML = ("PostioY: " + (detail.position.y).toFixed(2))
                document.getElementById('PosZ').innerHTML = ("PostioZ: " + (detail.position.z).toFixed(2))
                document.getElementById('OriX').innerHTML = ("CrrentTime: " + (curTimes).toFixed(2))
                document.getElementById('state_t').innerHTML = detail.name
               

            }

            
            const hideImage = ({detail}) => {
              if(detail.name != this.data.name){
                  return
                }

                obj3D.visible = false
                
                v1.pause()
                v2.pause()
                v3.pause()
                
                if(state == 1){
                  curTimes = v1.currentTime
                }else if(state == 2){
                  curTimes = v2.currentTime
                }else if(state == 3){
                  curTimes = v3.currentTime
                }

                xstate = 0
                
               // document.getElementById('OriY').innerHTML = ("state: " + state)
               // document.getElementById('OriZ').innerHTML = ("xstate: " + xstate)	
                document.getElementById('state_t').innerHTML = 'Lost'
            }

            
            const spvid1 = function(evt){

              setvidOp1.setAttribute('opacity',1)
              setvidOp2.setAttribute('opacity',0)
              setvidOp3.setAttribute('opacity',0)
              
              if(xstate == 0){ 
                
                v1.currentTime = curTimes 
                document.getElementById('OriZ').innerHTML = '1state'
                xstate = 1
              }
              
              v1.play()
              v2.pause()
              v3.pause()

              

            }
            const spvid2 = function(evt){

              setvidOp1.setAttribute('opacity',0)
              setvidOp2.setAttribute('opacity',1)
              setvidOp3.setAttribute('opacity',0)

              if(xstate == 0){ 
                
                v2.currentTime = curTimes 
                document.getElementById('OriZ').innerHTML = '2state'
                xstate = 1
              }

              v2.play()
              v1.pause()
              v3.pause()

            }
            const spvid3 = function(evt){

              setvidOp1.setAttribute('opacity',0)
              setvidOp2.setAttribute('opacity',0)
              setvidOp3.setAttribute('opacity',1)

              if(xstate == 0){ 
                
                v3.currentTime = curTimes 
                document.getElementById('OriZ').innerHTML = '3state'	
                xstate = 1
              }
              
              v3.play()
              v1.pause()
              v2.pause()

              
            }
            


            const sxvid = function(evt){
                
              setvidOp1.setAttribute('opacity',0)
              setvidOp2.setAttribute('opacity',0)
              setvidOp3.setAttribute('opacity',0)
              v1.pause()
              v2.pause()
              v3.pause()



              xstate = 0

            }
            

            
            scene.addEventListener('xrimagefound', showImgge)
            scene.addEventListener('xrimageupdated', showImgge)
            scene.addEventListener('xrimagelost', hideImage)

            
            scene.addEventListener('setvid1',spvid1)
            scene.addEventListener('setvid2',spvid2)
            scene.addEventListener('setvid3',spvid3)
            scene.addEventListener('setvidx',sxvid)
            

    }

  })

/*
  AFRAME.registerComponent('settri', {
      
        init: function(){

            const obj3D = this.el.object3D
            const el = this.el
            const scene = this.el.sceneEl

            const v = document.getElementById('vid2')   

            const b = document.getElementById('vid1')

            v.pause()
            obj3D.visible = true

            const setvid1 = function(evt){
                v.play()
                b.play()
              //  obj3D.visible = true

                document.getElementById('PosX').innerHTML = 'setV1'
            }

            const setx = function(evt){
              //  v.pause()
               // obj3D.visible = false
                document.getElementById('PosX').innerHTML = 'XXX'
            }


            scene.addEventListener('setvid',setvid1)
            scene.addEventListener('setvidx',setx)

            

        }

  })

  */