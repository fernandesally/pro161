AFRAME.registerComponent("balls",{
    init:function(){
        this.shootballs()
    },
    shootballs:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                console.log("helooooooooooo")
                var ball=document.createElement("a-entity")
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:2,
                    color: "brown"

                })

                ball.setAttribute("material","color","#ff0000")
                var cam=document.querySelector("#camera")
                var pos=cam.getAttribute("position") 
                ball.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
            }
        })
    }
})