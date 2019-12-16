var anges_s
  var angle_deg
	var state = 0
	var sts

		  

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


  AFRAME.registerComponent('target-vids', {

    init: function(){
          
            const obj3D = this.el.object3D
            const el = this.el
            const scene = this.el.sceneEl
            const v = document.getElementById('vid1')
           // const setvVidentity = document.getElementById('setvid1').object3D

           const setvidOp = document.getElementById('vvid1')

            this.camera = document.getElementById('camera')
        
            obj3D.visible = false
            //setvVidentity.visible = false
            setvidOp.opacity = 0
            v.pause()

            scene.emit('recenter')


            const showImgge = ({detail}) =>{
                if(detail.name != 'Proto'){
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

                document.getElementById('PosX').innerHTML = ("PostioX: " + (detail.position.x).toFixed(2))
                document.getElementById('PosY').innerHTML = ("PostioY: " + (detail.position.y).toFixed(2))
                document.getElementById('PosZ').innerHTML = ("PostioZ: " + (detail.position.z).toFixed(2))

                //object position
                //var qua = new THREE.Quaternion(detail.rotation.x ,detail.rotation.y,detail.rotation.z,detail.rotation.w)
               // qua.setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI/2)
                
               // setvVidentity.position.copy(detail.position)
               // setvVidentity.quaternion.copy(qua)
                //setvVidentity.rotation.y = 90
               // setvVidentity.scale.set(detail.scale * .15 ,detail.scale * .15,detail.scale * .15)
               // setvVidentity.visible = true
                setvidOp.opacity = 1
                v.play()

                // if angle
                  /*
                if(angle_deg < 80 && angle_deg > 20){
                  
                  this.el.emit('setvid',{value:1})

                }else{
                  this.el.emit('setvidx',{value:1})
                }
                    */

                //end if engle



                document.getElementById('state_t').innerHTML = detail.name

            }

            const hideImage = ({detail}) => {
              if(detail.name != 'Proto'){
                  return
                }

                obj3D.visible = false
                setvVidentity.visible = false
                v.pause()
                document.getElementById('state_t').innerHTML = 'Lost'
            }

            scene.addEventListener('xrimagefound', showImgge)
            scene.addEventListener('xrimageupdated', showImgge)
            scene.addEventListener('xrimagelost', hideImage)

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