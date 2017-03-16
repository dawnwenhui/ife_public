/**
 * Created by Administrator on 2017/3/22 0022.
 */
function init()
{
    //Three.js生成Canvas元素
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize(400,300);


    document.getElementsByTagName('body')[0].appendChild(renderer1.domElement);

    //设置背景色
    renderer1.setClearColor(0x000000);


    //场景 Three.js中添加的物体都是添加到场景中去的 大容器
    var scene1 = new THREE.Scene();

    var camera1 = new THREE.OrthographicCamera(-2,2,1.8,-1.8,5,10);
    camera1.position.set(4,-3,5);
    scene1.add(camera1);

    //指定看着圆点的地方
    camera1.lookAt(new THREE.Vector3(0,0,0));

    // 立方体
    //THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    // width是x方向上的长度；height是y方向上的长度；depth是z方向上的长度；后三个参数分别是在三个方向上的分段数
    var CubeGeometry = new THREE.Mesh(new THREE.CubeGeometry(1,2,3),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene1.add(CubeGeometry);

    //渲染
    renderer1.render(scene1,camera1);
}