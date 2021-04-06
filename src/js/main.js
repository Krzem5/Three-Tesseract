var scene,cam,renderer,controls,block
function init(){
	scene=new THREE.Scene()
	cam=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,100000)
	cam.position.set(0,10,0)
	cam.enablePan=false
	cam.lookAt(new THREE.Vector3(0,0,0))
	renderer=new THREE.WebGLRenderer({antialias:true})
	renderer.setSize(window.innerWidth,window.innerHeight)
	scene.background=new THREE.Color().setHSL(1,1,1)
	document.body.appendChild(renderer.domElement)
	scene.add(new THREE.AmbientLight(0xffffff,1))
	renderer.render(scene,cam)
	controls=new THREE.OrbitControls(cam,renderer.domElement)
	controls.target=new THREE.Vector3(0,0,0)
	window.addEventListener("resize",resize,false)
	window.addEventListener("keypress",onkeypress)
	block=new Tesseract(0,0,0,0)
	requestAnimationFrame(render)
}
function render(){
	renderer.render(scene,cam)
	requestAnimationFrame(render)
}
function resize(){
	cam.aspect=window.innerWidth/window.innerHeight
	cam.updateProjectionMatrix()
	renderer.setSize(window.innerWidth,window.innerHeight)
}
function onkeypress(e){
	switch (e.keyCode){
		case 37:
			block.pos.w-=0.5
			break
		case 39:
			block.pos.w+=0.5
			break
	}
}
document.addEventListener("DOMContentLoaded",init,false)
