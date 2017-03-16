/**
 * Created by Administrator on 2017/3/17 0017.
 */
function init()
{
    //正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：
    //
    //THREE.OrthographicCamera(left, right, top, bottom, near, far)

    //设置照相机
    var camera = new THREE.OrthographicCamara(-2,2,1.5,-1.5,1,10);
    camera.position.set(0,0,5);
    scene.add(camera);

    var cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe:true
        })
    );
    scene.add(cube);
}

